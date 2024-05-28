'reach 0.1';
'use strict';

export const main = Reach.App(() => {
    setOptions({ ALGOExitMode: 'DeleteAndCloseOutASAs' });
    const D = Participant('Admin', {
        price: UInt,
        deadline: UInt,
        ready: Fun([], Null),
    });
    const A = API('Attendee', {
        iWillGo: Fun([], Bool),
    });
    const C = API('Checkin', {
        theyCame: Fun([Address], Bool),
        timesUp: Fun([], Bool),
    });
    init();
    D.only(() => {
        const price = declassify(interact.price);
        const deadline = declassify(interact.deadline);
    });
    D.publish(price, deadline);
    commit();
    D.publish();
    D.interact.ready();

    const deadlineBlock = relativeTime(deadline);
    const RSVPs = new Set();

    const [keepGoing,howMany] = 
        parallelReduce([true, 0])
        .define(() => {

        })
        .invariant(
            true
            && balance() == howMany * price
            && RSVPs.Map.size() == howMany
        )
        .while(keepGoing)
        .api(A.iWillGo,
            () => {
                check( ! RSVPs.member(this), "not yet rspvd" );
            },
            () => price,
            (k) => {
                check( ! RSVPs.member(this), "not yet rspvd" );
                RSVPs.insert(this);
                //store that they are rsvp'ing
                k(true);
                return [keepGoing, howMany +1]
            }
        )
        .api(C.theyCame,
            (who) => {
                check( RSVPs.member(who), "rspvd" );
                check( this == D, 'u are the Deployer')
            },
            (_) => 0,
            (who, k) => {
                check( RSVPs.member(who), "rspvd" );
                check( this == D, 'u are the Deployer')
                transfer(price).to(who);
                RSVPs.remove(who);
                k(true);
                return[keepGoing, howMany -1]
            }
            
        )
        .timeout(deadlineBlock, () => {
            const [ [], k] = call(C.timesUp);
            k(true);
            return[false, howMany]
        });

        const lefttovers = howMany;

        transfer(lefttovers * price).to(D);
        commit();
        exit();

})
