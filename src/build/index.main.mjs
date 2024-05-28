// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_83: ctc3,
    Checkin_theyCame0_83: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v414 = stdlib.protect(ctc2, interact.deadline, 'for Admin\'s interact field deadline');
  const v415 = stdlib.protect(ctc2, interact.price, 'for Admin\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v415, v414],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v419, v420], secs: v422, time: v421, didSend: v29, from: v418 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v419, v420], secs: v422, time: v421, didSend: v29, from: v418 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v418, v419, v420, v421],
    evt_cnt: 0,
    funcNum: 1,
    lct: v421,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v425, time: v424, didSend: v34, from: v423 } = txn2;
      
      ;
      
      const v434 = stdlib.safeAdd(v421, v420);
      const v436 = stdlib.checkedBigNumberify('./index.rsh:32:31:decimal', stdlib.UInt_max, '0');
      const v437 = true;
      const v438 = v424;
      
      if (await (async () => {
        
        return v437;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v602 = stdlib.safeMul(v436, v419);
        sim_r.txns.push({
          kind: 'from',
          to: v418,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v425, time: v424, didSend: v34, from: v423 } = txn2;
  ;
  const v426 = stdlib.addressEq(v418, v423);
  stdlib.assert(v426, {
    at: './index.rsh:25:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:26:21:application',
    fs: ['at ./index.rsh:26:21:application call to [unknown function] (defined at: ./index.rsh:26:21:function exp)', 'at ./index.rsh:26:21:application call to "liftedInteract" (defined at: ./index.rsh:26:21:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v434 = stdlib.safeAdd(v421, v420);
  let v436 = stdlib.checkedBigNumberify('./index.rsh:32:31:decimal', stdlib.UInt_max, '0');
  let v437 = true;
  let v438 = v424;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v437;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v434],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v592], secs: v594, time: v593, didSend: v382, from: v591 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v595 = true;
      await txn5.getOutput('Checkin_timesUp', 'v595', ctc7, v595);
      const cv436 = v436;
      const cv437 = false;
      const cv438 = v593;
      
      v436 = cv436;
      v437 = cv437;
      v438 = cv438;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v493], secs: v495, time: v494, didSend: v283, from: v492 } = txn4;
      switch (v493[0]) {
        case 'Attendee_iWillGo0_83': {
          const v496 = v493[1];
          undefined /* setApiDetails */;
          ;
          const v506 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v492, ctc0), null);
          const v507 = {
            None: 0,
            Some: 1
            }[v506[0]];
          const v508 = stdlib.eq(v507, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v509 = v508 ? false : true;
          stdlib.assert(v509, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:48:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
            msg: 'not yet rspvd',
            who: 'Admin'
            });
          await stdlib.mapSet(map0, ctc4, v492, ctc0, null);
          const v512 = true;
          await txn4.getOutput('Attendee_iWillGo', 'v512', ctc7, v512);
          const v518 = stdlib.safeAdd(v436, stdlib.checkedBigNumberify('./index.rsh:52:45:decimal', stdlib.UInt_max, '1'));
          const cv436 = v518;
          const cv437 = true;
          const cv438 = v494;
          
          v436 = cv436;
          v437 = cv437;
          v438 = cv438;
          
          txn3 = txn4;
          continue;
          break;
          }
        case 'Checkin_theyCame0_83': {
          const v542 = v493[1];
          undefined /* setApiDetails */;
          ;
          const v567 = v542[stdlib.checkedBigNumberify('./index.rsh:55:13:spread', stdlib.UInt_max, '0')];
          const v568 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v567, ctc0), null);
          const v569 = {
            None: 0,
            Some: 1
            }[v568[0]];
          const v570 = stdlib.eq(v569, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v570, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:62:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:22:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
            msg: 'rspvd',
            who: 'Admin'
            });
          const v572 = stdlib.addressEq(v492, v418);
          stdlib.assert(v572, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:63:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:22:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
            msg: 'u are the Deployer',
            who: 'Admin'
            });
          ;
          await stdlib.mapSet(map0, ctc4, v567, ctc0, undefined /* Nothing */);
          const v579 = true;
          await txn4.getOutput('Checkin_theyCame', 'v579', ctc7, v579);
          const v586 = stdlib.safeSub(v436, stdlib.checkedBigNumberify('./index.rsh:67:44:decimal', stdlib.UInt_max, '1'));
          const cv436 = v586;
          const cv437 = true;
          const cv438 = v494;
          
          v436 = cv436;
          v437 = cv437;
          v438 = cv438;
          
          txn3 = txn4;
          continue;
          break;
          }
        }}
    
    }
  const v602 = stdlib.safeMul(v436, v419);
  ;
  return;
  
  
  
  
  };
export async function _Attendee_iWillGo4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendee_iWillGo4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendee_iWillGo4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_83: ctc4,
    Checkin_theyCame0_83: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v418, v419, v434, v436] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v459 = ctc.selfAddress();
  const v461 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:43:16:application call to [unknown function] (defined at: ./index.rsh:43:16:function exp)', 'at ./index.rsh:32:23:application call to "runAttendee_iWillGo0_83" (defined at: ./index.rsh:42:13:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'in',
    who: 'Attendee_iWillGo'
    });
  const v463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v459, ctc0), null);
  const v464 = {
    None: 0,
    Some: 1
    }[v463[0]];
  const v465 = stdlib.eq(v464, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v466 = v465 ? false : true;
  stdlib.assert(v466, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:44:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:16:application call to [unknown function] (defined at: ./index.rsh:43:16:function exp)', 'at ./index.rsh:43:16:application call to [unknown function] (defined at: ./index.rsh:43:16:function exp)', 'at ./index.rsh:32:23:application call to "runAttendee_iWillGo0_83" (defined at: ./index.rsh:42:13:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'not yet rspvd',
    who: 'Attendee_iWillGo'
    });
  const v470 = ['Attendee_iWillGo0_83', v461];
  
  const txn1 = await (ctc.sendrecv({
    args: [v418, v419, v434, v436, v470],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v419, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v493], secs: v495, time: v494, didSend: v283, from: v492 } = txn1;
      
      switch (v493[0]) {
        case 'Attendee_iWillGo0_83': {
          const v496 = v493[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_iWillGo"
            });
          sim_r.txns.push({
            amt: v419,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v492, ctc0), null);
          await stdlib.simMapSet(sim_r, 0, ctc2, v492, ctc0, null);
          const v512 = true;
          const v513 = await txn1.getOutput('Attendee_iWillGo', 'v512', ctc7, v512);
          
          const v518 = stdlib.safeAdd(v436, stdlib.checkedBigNumberify('./index.rsh:52:45:decimal', stdlib.UInt_max, '1'));
          const v1102 = v518;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Checkin_theyCame0_83': {
          const v542 = v493[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v493], secs: v495, time: v494, didSend: v283, from: v492 } = txn1;
  switch (v493[0]) {
    case 'Attendee_iWillGo0_83': {
      const v496 = v493[1];
      undefined /* setApiDetails */;
      ;
      const v506 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v492, ctc0), null);
      const v507 = {
        None: 0,
        Some: 1
        }[v506[0]];
      const v508 = stdlib.eq(v507, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v509 = v508 ? false : true;
      stdlib.assert(v509, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:48:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
        msg: 'not yet rspvd',
        who: 'Attendee_iWillGo'
        });
      await stdlib.mapSet(map0, ctc2, v492, ctc0, null);
      const v512 = true;
      const v513 = await txn1.getOutput('Attendee_iWillGo', 'v512', ctc7, v512);
      if (v283) {
        stdlib.protect(ctc0, await interact.out(v496, v513), {
          at: './index.rsh:42:14:application',
          fs: ['at ./index.rsh:42:14:application call to [unknown function] (defined at: ./index.rsh:42:14:function exp)', 'at ./index.rsh:51:18:application call to "k" (defined at: ./index.rsh:47:17:function exp)', 'at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
          msg: 'out',
          who: 'Attendee_iWillGo'
          });
        }
      else {
        }
      
      const v518 = stdlib.safeAdd(v436, stdlib.checkedBigNumberify('./index.rsh:52:45:decimal', stdlib.UInt_max, '1'));
      const v1102 = v518;
      return;
      
      break;
      }
    case 'Checkin_theyCame0_83': {
      const v542 = v493[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Checkin_theyCame4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Checkin_theyCame4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Checkin_theyCame4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_83: ctc5,
    Checkin_theyCame0_83: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v418, v419, v434, v436] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v472 = ctc.selfAddress();
  const v474 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:32:23:application call to "runCheckin_theyCame0_83" (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'in',
    who: 'Checkin_theyCame'
    });
  const v475 = v474[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v478 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v475, ctc0), null);
  const v479 = {
    None: 0,
    Some: 1
    }[v478[0]];
  const v480 = stdlib.eq(v479, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v480, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:57:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:32:23:application call to "runCheckin_theyCame0_83" (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'rspvd',
    who: 'Checkin_theyCame'
    });
  const v482 = stdlib.addressEq(v472, v418);
  stdlib.assert(v482, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:32:23:application call to "runCheckin_theyCame0_83" (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:23:function exp)'],
    msg: 'u are the Deployer',
    who: 'Checkin_theyCame'
    });
  const v487 = ['Checkin_theyCame0_83', v474];
  
  const txn1 = await (ctc.sendrecv({
    args: [v418, v419, v434, v436, v487],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v493], secs: v495, time: v494, didSend: v283, from: v492 } = txn1;
      
      switch (v493[0]) {
        case 'Attendee_iWillGo0_83': {
          const v496 = v493[1];
          
          break;
          }
        case 'Checkin_theyCame0_83': {
          const v542 = v493[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Checkin_theyCame"
            });
          ;
          const v567 = v542[stdlib.checkedBigNumberify('./index.rsh:55:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v567, ctc0), null);
          sim_r.txns.push({
            kind: 'from',
            to: v567,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, ctc2, v567, ctc0, undefined /* Nothing */);
          const v579 = true;
          const v580 = await txn1.getOutput('Checkin_theyCame', 'v579', ctc7, v579);
          
          const v586 = stdlib.safeSub(v436, stdlib.checkedBigNumberify('./index.rsh:67:44:decimal', stdlib.UInt_max, '1'));
          const v1114 = v586;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v493], secs: v495, time: v494, didSend: v283, from: v492 } = txn1;
  switch (v493[0]) {
    case 'Attendee_iWillGo0_83': {
      const v496 = v493[1];
      return;
      break;
      }
    case 'Checkin_theyCame0_83': {
      const v542 = v493[1];
      undefined /* setApiDetails */;
      ;
      const v567 = v542[stdlib.checkedBigNumberify('./index.rsh:55:13:spread', stdlib.UInt_max, '0')];
      const v568 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v567, ctc0), null);
      const v569 = {
        None: 0,
        Some: 1
        }[v568[0]];
      const v570 = stdlib.eq(v569, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v570, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:62:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:22:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
        msg: 'rspvd',
        who: 'Checkin_theyCame'
        });
      const v572 = stdlib.addressEq(v492, v418);
      stdlib.assert(v572, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:63:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:22:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
        msg: 'u are the Deployer',
        who: 'Checkin_theyCame'
        });
      ;
      await stdlib.mapSet(map0, ctc2, v567, ctc0, undefined /* Nothing */);
      const v579 = true;
      const v580 = await txn1.getOutput('Checkin_theyCame', 'v579', ctc7, v579);
      if (v283) {
        stdlib.protect(ctc0, await interact.out(v542, v580), {
          at: './index.rsh:55:14:application',
          fs: ['at ./index.rsh:55:14:application call to [unknown function] (defined at: ./index.rsh:55:14:function exp)', 'at ./index.rsh:66:18:application call to "k" (defined at: ./index.rsh:61:22:function exp)', 'at ./index.rsh:61:22:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
          msg: 'out',
          who: 'Checkin_theyCame'
          });
        }
      else {
        }
      
      const v586 = stdlib.safeSub(v436, stdlib.checkedBigNumberify('./index.rsh:67:44:decimal', stdlib.UInt_max, '1'));
      const v1114 = v586;
      return;
      
      break;
      }
    }
  
  
  };
export async function _Checkin_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Checkin_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Checkin_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v418, v419, v434, v436] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v590 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:72:13:application',
    fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:13:function exp)', 'at ./index.rsh:71:36:application call to [unknown function] (defined at: ./index.rsh:71:36:function exp)'],
    msg: 'in',
    who: 'Checkin_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v418, v419, v434, v436, v590],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v592], secs: v594, time: v593, didSend: v382, from: v591 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Checkin_timesUp"
        });
      ;
      const v595 = true;
      const v596 = await txn1.getOutput('Checkin_timesUp', 'v595', ctc5, v595);
      
      const v1121 = stdlib.safeMul(v436, v419);
      sim_r.txns.push({
        kind: 'from',
        to: v418,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v592], secs: v594, time: v593, didSend: v382, from: v591 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v595 = true;
  const v596 = await txn1.getOutput('Checkin_timesUp', 'v595', ctc5, v595);
  stdlib.protect(ctc0, await interact.out(v592, v596), {
    at: './index.rsh:72:13:application',
    fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:13:function exp)', 'at ./index.rsh:73:14:application call to "k" (defined at: ./index.rsh:72:13:function exp)', 'at ./index.rsh:71:36:application call to [unknown function] (defined at: ./index.rsh:71:36:function exp)'],
    msg: 'out',
    who: 'Checkin_timesUp'
    });
  
  const v1121 = stdlib.safeMul(v436, v419);
  ;
  return;
  
  
  
  };
export async function Attendee_iWillGo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Attendee_iWillGo4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Checkin_theyCame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_theyCame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_theyCame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Checkin_theyCame4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Checkin_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Checkin_timesUp4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Attendee_iWillGo()byte`, `Checkin_theyCame(address)byte`, `Checkin_timesUp()byte`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[32])))void`, `_reachp_4((uint64,()))void`],
    pure: [],
    sigs: [`Attendee_iWillGo()byte`, `Checkin_theyCame(address)byte`, `Checkin_timesUp()byte`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[32])))void`, `_reachp_4((uint64,()))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAIAAEIBNR6ICgwJgIAAQAxGEEClShkSSJbNQEkWzUCKWSCBwQSJfqEBCfv3mwEK/BAuwQ9/vszBKRxPJYEv4aWtgTf2SMoNhoAjgcAVAI6AEEAAQIdAkUCLwCBKa81CyU0ARJEiAL4NAsiWzUMNAtXCCE1E4AE6itM0zQMFlA0E1CwNAyIAqMyBjQQDEQ0EyJVjQICcAJzQv+/NhoBNQskr4ABATQLUFA1C0L/siSvNQslNAESRIgCpjQLIls1DIAEb/SOKTQMFlCwNAyIAlsyBjQQD0QjNQuACAAAAAAAAAJTNAsWUQcIULA0CxZRBwg1BCIyBjUNNQ40DkEB0zQSNBEWUDQQFlA0DxZQJTIGNQI1ASlMVwA4Zyg0ARY0AhZQZzEZIhJEiAJTNANAAAqABBUffHU0BFCwI0M0EYgCAygoKTEAUIgB7yJVIxNEIQQpMQBQKIgCMSM1C4AIAAAAAAAAAgA0CxZRBwhQsDQLFlEHCDUENA8jCCMyBjUNNQ41D0L/dDQTVwEgNQsoKCk0C1CIAaMiVSMSRDEANBISRDQRNAuIAY0hBCk0C1C8Ik4CTTQHCDUHIzULgAgAAAAAAAACQzQLFlEHCFCwNAsWUQcINQQ0DyMJIzIGNQ01DjUPQv8VMQA1EjIGNQs0DSJbNQ40DSRbNRE0DYEQWzUMgAT3cRNNNA4WUDQRFlA0DBZQsDQOiAETNBI0ERZQNAwWUDQLFlAjMgZC/uQjNAESRElXACA1EkkhBVs1EUkhBls1DCEHWzULNBAXNROABNUVGRQ0ExZQsDQTiADONBIxABJENAs0DAg1ECIjMgY1DTUONQ9C/oOIAK2BoI0GiAD3NhoBNQ1C/1yIAJs2GgE1EEL/mIgAkDYaATULQv3BiACFNhoBNQtC/ggiMTQSRIECMTUSRCIxNhJEIjE3EkSIAGWBOK8iIkL+RjEZIhJEQv5eNA80EQs0EogAWTEZgQUSRIgAmTIKYDIKeAlJNQYyCogAQUL+NEhMv0iJIrIBI7IQsgeyCLOJQv4xQv54SIlMCUk1BjIJiAAbiQlJQf/uSTUGiAAeiSM1A4lJIhJMNAISEUSJsUL/w75JFlEHCEUETVCJMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiUlXACA1EkkhBVs1EUkhBls1ECEHWzUPiTQGCDUGiTQGNAdKD0H/iUL/kUxJvUD/Z0sDiP/jQv9f`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `31`,
    101: `32`,
    102: `33`,
    103: `33`,
    104: `33`,
    105: `34`,
    106: `34`,
    107: `35`,
    108: `36`,
    109: `37`,
    11: `2`,
    110: `37`,
    111: `38`,
    112: `38`,
    113: `39`,
    114: `39`,
    115: `39`,
    116: `40`,
    117: `40`,
    118: `41`,
    119: `41`,
    12: `2`,
    120: `41`,
    121: `41`,
    122: `41`,
    123: `41`,
    124: `42`,
    125: `42`,
    126: `43`,
    127: `44`,
    128: `45`,
    129: `45`,
    13: `2`,
    130: `46`,
    131: `47`,
    132: `49`,
    133: `49`,
    134: `50`,
    135: `50`,
    136: `50`,
    137: `51`,
    138: `51`,
    139: `52`,
    14: `2`,
    140: `52`,
    141: `53`,
    142: `54`,
    143: `55`,
    144: `55`,
    145: `56`,
    146: `57`,
    147: `58`,
    148: `58`,
    149: `58`,
    15: `2`,
    150: `58`,
    151: `58`,
    152: `58`,
    153: `59`,
    154: `59`,
    155: `59`,
    156: `61`,
    157: `61`,
    158: `61`,
    159: `62`,
    16: `2`,
    160: `62`,
    161: `64`,
    162: `65`,
    163: `66`,
    164: `66`,
    165: `66`,
    166: `67`,
    167: `67`,
    168: `68`,
    169: `69`,
    17: `4`,
    170: `70`,
    171: `70`,
    172: `71`,
    173: `71`,
    174: `71`,
    175: `74`,
    176: `75`,
    177: `76`,
    178: `76`,
    179: `78`,
    18: `4`,
    180: `79`,
    181: `79`,
    182: `80`,
    183: `81`,
    184: `82`,
    185: `82`,
    186: `82`,
    187: `83`,
    188: `83`,
    189: `84`,
    19: `5`,
    190: `85`,
    191: `86`,
    192: `86`,
    193: `87`,
    194: `87`,
    195: `87`,
    196: `87`,
    197: `87`,
    198: `87`,
    199: `88`,
    2: `2`,
    20: `5`,
    200: `88`,
    201: `89`,
    202: `90`,
    203: `91`,
    204: `93`,
    205: `93`,
    206: `94`,
    207: `94`,
    208: `94`,
    209: `95`,
    21: `5`,
    210: `95`,
    211: `96`,
    212: `96`,
    213: `97`,
    214: `98`,
    215: `100`,
    216: `101`,
    217: `101`,
    218: `102`,
    219: `102`,
    22: `6`,
    220: `102`,
    221: `102`,
    222: `102`,
    223: `102`,
    224: `102`,
    225: `102`,
    226: `102`,
    227: `102`,
    228: `103`,
    229: `103`,
    23: `7`,
    230: `104`,
    231: `105`,
    232: `105`,
    233: `105`,
    234: `106`,
    235: `107`,
    236: `108`,
    237: `108`,
    238: `109`,
    239: `110`,
    24: `8`,
    240: `110`,
    241: `110`,
    242: `111`,
    243: `111`,
    244: `112`,
    245: `113`,
    246: `113`,
    247: `114`,
    248: `114`,
    249: `115`,
    25: `9`,
    250: `115`,
    251: `117`,
    252: `117`,
    253: `118`,
    254: `118`,
    255: `118`,
    256: `120`,
    257: `120`,
    258: `121`,
    259: `121`,
    26: `10`,
    260: `122`,
    261: `123`,
    262: `124`,
    263: `124`,
    264: `125`,
    265: `126`,
    266: `127`,
    267: `127`,
    268: `128`,
    269: `129`,
    27: `11`,
    270: `130`,
    271: `131`,
    272: `131`,
    273: `133`,
    274: `133`,
    275: `134`,
    276: `134`,
    277: `135`,
    278: `136`,
    279: `137`,
    28: `11`,
    280: `137`,
    281: `137`,
    282: `138`,
    283: `139`,
    284: `140`,
    285: `140`,
    286: `141`,
    287: `142`,
    288: `142`,
    289: `143`,
    29: `12`,
    290: `144`,
    291: `145`,
    292: `146`,
    293: `146`,
    294: `147`,
    295: `148`,
    296: `149`,
    297: `151`,
    298: `151`,
    299: `151`,
    3: `2`,
    30: `13`,
    300: `153`,
    301: `153`,
    302: `154`,
    303: `154`,
    304: `154`,
    305: `156`,
    306: `156`,
    307: `156`,
    308: `156`,
    309: `156`,
    31: `14`,
    310: `156`,
    311: `157`,
    312: `157`,
    313: `158`,
    314: `159`,
    315: `161`,
    316: `162`,
    317: `164`,
    318: `164`,
    319: `165`,
    32: `14`,
    320: `165`,
    321: `165`,
    322: `169`,
    323: `170`,
    324: `171`,
    325: `172`,
    326: `172`,
    327: `173`,
    328: `174`,
    329: `174`,
    33: `15`,
    330: `174`,
    331: `175`,
    332: `176`,
    333: `177`,
    334: `178`,
    335: `179`,
    336: `184`,
    337: `184`,
    338: `185`,
    339: `186`,
    34: `16`,
    340: `186`,
    341: `187`,
    342: `188`,
    343: `189`,
    344: `189`,
    345: `189`,
    346: `190`,
    347: `191`,
    348: `191`,
    349: `192`,
    35: `18`,
    350: `192`,
    351: `192`,
    352: `192`,
    353: `192`,
    354: `192`,
    355: `192`,
    356: `192`,
    357: `192`,
    358: `192`,
    359: `193`,
    36: `18`,
    360: `193`,
    361: `194`,
    362: `195`,
    363: `195`,
    364: `195`,
    365: `196`,
    366: `197`,
    367: `198`,
    368: `198`,
    369: `199`,
    37: `18`,
    370: `200`,
    371: `200`,
    372: `200`,
    373: `201`,
    374: `201`,
    375: `202`,
    376: `202`,
    377: `203`,
    378: `204`,
    379: `205`,
    38: `18`,
    380: `206`,
    381: `206`,
    382: `207`,
    383: `207`,
    384: `208`,
    385: `208`,
    386: `209`,
    387: `209`,
    388: `210`,
    389: `210`,
    39: `18`,
    390: `210`,
    391: `212`,
    392: `212`,
    393: `213`,
    394: `213`,
    395: `213`,
    396: `214`,
    397: `214`,
    398: `216`,
    399: `217`,
    4: `2`,
    40: `18`,
    400: `218`,
    401: `219`,
    402: `219`,
    403: `220`,
    404: `221`,
    405: `221`,
    406: `221`,
    407: `222`,
    408: `223`,
    409: `224`,
    41: `18`,
    410: `225`,
    411: `226`,
    412: `231`,
    413: `231`,
    414: `232`,
    415: `232`,
    416: `233`,
    417: `234`,
    418: `239`,
    419: `239`,
    42: `18`,
    420: `241`,
    421: `241`,
    422: `242`,
    423: `242`,
    424: `242`,
    425: `243`,
    426: `243`,
    427: `244`,
    428: `245`,
    429: `245`,
    43: `18`,
    430: `246`,
    431: `248`,
    432: `249`,
    433: `250`,
    434: `250`,
    435: `251`,
    436: `253`,
    437: `253`,
    438: `254`,
    439: `255`,
    44: `18`,
    440: `255`,
    441: `256`,
    442: `257`,
    443: `257`,
    444: `258`,
    445: `258`,
    446: `258`,
    447: `258`,
    448: `258`,
    449: `258`,
    45: `18`,
    450: `258`,
    451: `258`,
    452: `258`,
    453: `258`,
    454: `259`,
    455: `259`,
    456: `260`,
    457: `261`,
    458: `261`,
    459: `261`,
    46: `18`,
    460: `262`,
    461: `263`,
    462: `264`,
    463: `264`,
    464: `265`,
    465: `266`,
    466: `266`,
    467: `266`,
    468: `267`,
    469: `267`,
    47: `18`,
    470: `268`,
    471: `268`,
    472: `269`,
    473: `270`,
    474: `271`,
    475: `272`,
    476: `272`,
    477: `273`,
    478: `273`,
    479: `274`,
    48: `18`,
    480: `274`,
    481: `275`,
    482: `275`,
    483: `276`,
    484: `276`,
    485: `276`,
    486: `278`,
    487: `278`,
    488: `279`,
    489: `279`,
    49: `18`,
    490: `280`,
    491: `280`,
    492: `281`,
    493: `281`,
    494: `282`,
    495: `282`,
    496: `283`,
    497: `284`,
    498: `285`,
    499: `285`,
    5: `2`,
    50: `18`,
    500: `286`,
    501: `286`,
    502: `287`,
    503: `288`,
    504: `289`,
    505: `289`,
    506: `290`,
    507: `290`,
    508: `291`,
    509: `291`,
    51: `18`,
    510: `292`,
    511: `293`,
    512: `293`,
    513: `294`,
    514: `294`,
    515: `294`,
    516: `294`,
    517: `294`,
    518: `294`,
    519: `295`,
    52: `18`,
    520: `295`,
    521: `296`,
    522: `297`,
    523: `298`,
    524: `298`,
    525: `299`,
    526: `300`,
    527: `301`,
    528: `301`,
    529: `302`,
    53: `18`,
    530: `303`,
    531: `304`,
    532: `306`,
    533: `306`,
    534: `307`,
    535: `307`,
    536: `307`,
    537: `309`,
    538: `309`,
    539: `310`,
    54: `18`,
    540: `310`,
    541: `311`,
    542: `312`,
    543: `313`,
    544: `313`,
    545: `314`,
    546: `315`,
    547: `316`,
    548: `316`,
    549: `317`,
    55: `18`,
    550: `318`,
    551: `319`,
    552: `320`,
    553: `320`,
    554: `321`,
    555: `321`,
    556: `321`,
    557: `323`,
    558: `324`,
    559: `324`,
    56: `18`,
    560: `325`,
    561: `326`,
    562: `328`,
    563: `329`,
    564: `329`,
    565: `329`,
    566: `330`,
    567: `330`,
    568: `331`,
    569: `332`,
    57: `18`,
    570: `332`,
    571: `333`,
    572: `334`,
    573: `334`,
    574: `335`,
    575: `336`,
    576: `336`,
    577: `337`,
    578: `338`,
    579: `338`,
    58: `18`,
    580: `339`,
    581: `339`,
    582: `340`,
    583: `341`,
    584: `341`,
    585: `342`,
    586: `342`,
    587: `343`,
    588: `344`,
    589: `344`,
    59: `18`,
    590: `345`,
    591: `345`,
    592: `345`,
    593: `345`,
    594: `345`,
    595: `345`,
    596: `346`,
    597: `346`,
    598: `347`,
    599: `348`,
    6: `2`,
    60: `18`,
    600: `349`,
    601: `351`,
    602: `351`,
    603: `352`,
    604: `352`,
    605: `352`,
    606: `353`,
    607: `353`,
    608: `354`,
    609: `354`,
    61: `18`,
    610: `355`,
    611: `356`,
    612: `359`,
    613: `359`,
    614: `360`,
    615: `360`,
    616: `361`,
    617: `362`,
    618: `362`,
    619: `363`,
    62: `18`,
    620: `364`,
    621: `365`,
    622: `365`,
    623: `366`,
    624: `366`,
    625: `367`,
    626: `367`,
    627: `368`,
    628: `368`,
    629: `369`,
    63: `18`,
    630: `369`,
    631: `369`,
    632: `371`,
    633: `371`,
    634: `371`,
    635: `372`,
    636: `372`,
    637: `372`,
    638: `372`,
    639: `373`,
    64: `18`,
    640: `373`,
    641: `373`,
    642: `374`,
    643: `374`,
    644: `374`,
    645: `375`,
    646: `375`,
    647: `376`,
    648: `376`,
    649: `376`,
    65: `18`,
    650: `378`,
    651: `378`,
    652: `378`,
    653: `379`,
    654: `379`,
    655: `379`,
    656: `380`,
    657: `380`,
    658: `381`,
    659: `381`,
    66: `18`,
    660: `381`,
    661: `383`,
    662: `383`,
    663: `383`,
    664: `384`,
    665: `384`,
    666: `384`,
    667: `385`,
    668: `385`,
    669: `386`,
    67: `18`,
    670: `386`,
    671: `386`,
    672: `388`,
    673: `388`,
    674: `388`,
    675: `389`,
    676: `389`,
    677: `389`,
    678: `390`,
    679: `390`,
    68: `18`,
    680: `391`,
    681: `391`,
    682: `391`,
    683: `393`,
    684: `394`,
    685: `394`,
    686: `395`,
    687: `396`,
    688: `397`,
    689: `397`,
    69: `18`,
    690: `398`,
    691: `398`,
    692: `399`,
    693: `400`,
    694: `401`,
    695: `402`,
    696: `402`,
    697: `403`,
    698: `404`,
    699: `405`,
    7: `2`,
    70: `18`,
    700: `406`,
    701: `406`,
    702: `407`,
    703: `408`,
    704: `409`,
    705: `409`,
    706: `409`,
    707: `410`,
    708: `410`,
    709: `411`,
    71: `18`,
    710: `412`,
    711: `413`,
    712: `414`,
    713: `414`,
    714: `414`,
    715: `416`,
    716: `416`,
    717: `417`,
    718: `418`,
    719: `419`,
    72: `19`,
    720: `421`,
    721: `421`,
    722: `421`,
    723: `423`,
    724: `423`,
    725: `424`,
    726: `424`,
    727: `425`,
    728: `427`,
    729: `427`,
    73: `19`,
    730: `428`,
    731: `428`,
    732: `428`,
    733: `430`,
    734: `430`,
    735: `431`,
    736: `431`,
    737: `432`,
    738: `433`,
    739: `435`,
    74: `19`,
    740: `435`,
    741: `435`,
    742: `437`,
    743: `437`,
    744: `438`,
    745: `439`,
    746: `439`,
    747: `440`,
    748: `441`,
    749: `443`,
    75: `20`,
    750: `444`,
    751: `444`,
    752: `445`,
    753: `445`,
    754: `446`,
    755: `446`,
    756: `446`,
    757: `447`,
    758: `447`,
    759: `447`,
    76: `20`,
    760: `449`,
    761: `450`,
    762: `451`,
    763: `452`,
    764: `453`,
    765: `455`,
    766: `456`,
    767: `456`,
    768: `457`,
    769: `458`,
    77: `20`,
    770: `458`,
    771: `459`,
    772: `459`,
    773: `460`,
    774: `460`,
    775: `461`,
    776: `462`,
    777: `464`,
    778: `464`,
    779: `464`,
    78: `20`,
    780: `466`,
    781: `466`,
    782: `466`,
    783: `468`,
    784: `469`,
    785: `471`,
    786: `472`,
    787: `473`,
    788: `474`,
    789: `474`,
    79: `20`,
    790: `475`,
    791: `475`,
    792: `476`,
    793: `476`,
    794: `476`,
    795: `477`,
    796: `479`,
    797: `480`,
    798: `481`,
    799: `481`,
    8: `2`,
    80: `20`,
    800: `481`,
    801: `482`,
    802: `483`,
    803: `483`,
    804: `484`,
    805: `484`,
    806: `484`,
    807: `485`,
    808: `487`,
    809: `488`,
    81: `20`,
    810: `488`,
    811: `489`,
    812: `491`,
    813: `492`,
    814: `493`,
    815: `494`,
    816: `495`,
    817: `495`,
    818: `496`,
    819: `497`,
    82: `20`,
    820: `498`,
    821: `499`,
    822: `501`,
    823: `502`,
    824: `502`,
    825: `502`,
    826: `504`,
    827: `505`,
    828: `506`,
    829: `507`,
    83: `20`,
    830: `507`,
    831: `507`,
    832: `508`,
    833: `508`,
    834: `509`,
    835: `510`,
    836: `511`,
    837: `514`,
    838: `514`,
    839: `515`,
    84: `20`,
    840: `515`,
    841: `516`,
    842: `517`,
    843: `518`,
    844: `519`,
    845: `519`,
    846: `520`,
    847: `521`,
    848: `521`,
    849: `522`,
    85: `20`,
    850: `522`,
    851: `523`,
    852: `523`,
    853: `524`,
    854: `525`,
    855: `526`,
    856: `526`,
    857: `527`,
    858: `528`,
    859: `529`,
    86: `20`,
    860: `530`,
    861: `530`,
    862: `531`,
    863: `532`,
    864: `533`,
    865: `535`,
    866: `536`,
    867: `536`,
    868: `536`,
    869: `537`,
    87: `20`,
    870: `537`,
    871: `538`,
    872: `539`,
    873: `539`,
    874: `540`,
    875: `541`,
    876: `541`,
    877: `542`,
    878: `543`,
    879: `543`,
    88: `20`,
    880: `544`,
    881: `545`,
    882: `545`,
    883: `546`,
    884: `546`,
    885: `547`,
    886: `548`,
    887: `548`,
    888: `549`,
    889: `551`,
    89: `20`,
    890: `551`,
    891: `552`,
    892: `553`,
    893: `553`,
    894: `554`,
    895: `556`,
    896: `556`,
    897: `557`,
    898: `557`,
    899: `558`,
    9: `2`,
    90: `20`,
    900: `559`,
    901: `560`,
    902: `560`,
    903: `560`,
    904: `561`,
    905: `561`,
    906: `561`,
    907: `563`,
    908: `564`,
    909: `565`,
    91: `22`,
    910: `566`,
    911: `566`,
    912: `566`,
    913: `567`,
    914: `567`,
    915: `568`,
    916: `568`,
    917: `568`,
    918: `569`,
    92: `25`,
    93: `25`,
    94: `26`,
    95: `27`,
    96: `27`,
    97: `29`,
    98: `30`,
    99: `30`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"v1137","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Attendee_iWillGo0_83","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Checkin_theyCame0_83","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v512","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v579","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v595","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Attendee_iWillGo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v1131","type":"address"}],"name":"Checkin_theyCame","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Checkin_timesUp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v1140","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Attendee_iWillGo0_83","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Checkin_theyCame0_83","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1143","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T5","name":"v1146","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620016d79081380391601f1980601f85011683019360018060401b039284861084871117620003075781606092869260409889528339810103126200031d5783519260608401848110848211176200030757855280518452602090858282015191838701928352015191868601928352436003556200007f62000322565b5060049560ff875416620002f0577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e46080895133815283518582015285518b82015286516060820152a1518015908115620002e3575b5015620002cc5734620002b5576060620000ee62000322565b923384525193828401948552519288810193845201954387526001966000938885554389558951953385880152518a8701525160608601525160808501526080845260a0840184811087821117620002a257885283519586116200028f57600254908782811c9216801562000284575b83831014620002715750601f811162000225575b508093601f8611600114620001bd57505091839491849394620001b1575b50501b916000199060031b1c1916176002555b5161137e9081620003598239f35b01519250388062000190565b600283528183209493928692918316915b888383106200020a5750505010620001f0575b505050811b01600255620001a3565b015160001960f88460031b161c19169055388080620001e1565b858701518855909601959485019487935090810190620001ce565b60028352818320601f870160051c81019183881062000266575b601f0160051c019087905b8281106200025a57505062000172565b8481550187906200024a565b90915081906200023f565b634e487b7160e01b845260229052602483fd5b91607f16916200015e565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b865163100960cb60e01b8152600981880152602490fd5b865163100960cb60e01b8152600881880152602490fd5b90506001541438620000d5565b875163100960cb60e01b8152600781890152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b60405190608082016001600160401b0381118382101762000307576040526000606083828152826020820152826040820152015256fe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c9182631e93b0f1146106be575081632fe76ef01461063e57816336e56ea5146105d95781634e6341061461058c578163573b8510146102975781635d329792146101ca57816374c2f3e41461017e575080638323075714610160578063ab53f2c6146100f55763af020d631461009d5780610012565b816003193601126100f157602080926100e66100b7610922565b80926100c1610986565b858101908282515251151586825101526100d9610986565b9182525185820152610a4e565b015115159051908152f35b5080fd5b50346100f157816003193601126100f15781546101106107b6565b91805193849283526020828185015284518093850152815b83811061014957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610128565b50346100f157816003193601126100f1576020906001549051908152f35b8383806003193601126100f157610193610922565b928151906101a082610734565b35815260243580151581036101c6579381602095866101c0940152611109565b51908152f35b8380fd5b838360803660031901126100f1576101e0610922565b928151906101ed82610734565b8035825260603660231901126101c65782519060608201906001600160401b03821183831017610284575083526024356002811015610280578152604435801515810361028057602082015260206063193601126101c657825161025081610765565b6064356001600160a01b038116810361027c579181602097936101c09593528582015286820152610a4e565b8580fd5b8480fd5b634e487b7160e01b865260419052602485fd5b838360209283600319360112610588576102af610922565b508151906102bc82610765565b8035825260019182855403610571576102d36107b6565b8051810160808282031261056d579087806102f0930191016109a7565b9060ff835416610556577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159685805133815283518a820152a151801590811561054b575b5015610534573461051d5780516001600160a01b039033908216036105065761035a610a0c565b9080835116825287830151928883019384528660608201519101518101908181116104f35781106104ef578683019081526060808401928984528760808601524360a08601526103a8610922565b9451169485855251918a85019283525192888501938452519301928352848855438655865193898501525186840152516060830152516080820152608081526103f08161079b565b8051916001600160401b038311610284575061040d6002546106fa565b601f81116104b5575b508590601f8311600114610454579282939183928794610449575b50501b916000199060031b1c19161760025551908152f35b015192508780610431565b60028652868620919083601f198116885b8a8883831061049e5750505010610485575b505050811b016002556101c0565b015160001960f88460031b161c19169055858080610477565b868601518855909601959485019487935001610465565b6104df9060028752878720601f850160051c8101918986106104e5575b601f0160051c01906110f2565b86610416565b90915081906104d2565b8780fd5b634e487b7160e01b895260118652602489fd5b845163100960cb60e01b8152600e81850152602490fd5b835163100960cb60e01b8152600d81840152602490fd5b835163100960cb60e01b8152600c81840152602490fd5b905083541487610333565b845163100960cb60e01b8152600b81850152602490fd5b8680fd5b835163100960cb60e01b8152600a81840152602490fd5b8280fd5b5050816003193601126100f15760606020926100e66105a9610922565b80928551906105b782610765565b8082528651916105c683610734565b8883019180835283525115159052611109565b9050346105885760203660031901126105885735916001600160a01b038316830361063b575061061360609261060d61087d565b5061089c565b90808051928051610623816106da565b84526020810151151560208501520151151590820152f35b80fd5b9050602036600319011261058857356001600160a01b03811690819003610588576020926100e6839261066f610922565b928391855161067d81610734565b865161068881610765565b838152815288810191610699610957565b835281515260018251525186825101526106b1610986565b9182525187820152610a4e565b8490346100f157816003193601126100f1576020906003548152f35b600211156106e457565b634e487b7160e01b600052602160045260246000fd5b90600182811c9216801561072a575b602083101461071457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610709565b604081019081106001600160401b0382111761074f57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761074f57604052565b606081019081106001600160401b0382111761074f57604052565b60a081019081106001600160401b0382111761074f57604052565b6040519060006002546107c8816106fa565b80855260019180831690811561085e5750600114610806575b5050829003601f01601f191682016001600160401b0381118382101761074f57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b83851061084a575050505083010138806107e1565b805488860183015293019284908201610835565b919250506020925060ff191682850152151560051b83010138806107e1565b6040519061088a82610780565b60006040838281528260208201520152565b906108a561087d565b9160018060a01b03166000908082526005602052600160ff6040842054166108cc816106da565b03610917576040929350815260056020522060ff604051916108ed83610780565b548181166108fa816106da565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b60405190608082016001600160401b0381118382101761074f5760405260006060838281528260208201528260408201520152565b6040519061096482610780565b816000815260006020820152604080519161097e83610765565b600083520152565b6040519061099382610734565b816000815260206109a2610957565b910152565b9190826080910312610a0757604051608081016001600160401b0381118282101761074f576040528251909283916001600160a01b0381168103610a07576060918291845260208101516020850152604081015160408501520151910152565b600080fd5b6040519060c082016001600160401b0381118382101761074f576040528160a06000918281528260208201528260408201528260608201528260808201520152565b6040918251610a5c81610765565b835190610a6882610765565b6000918281528152600493848354036110db57610a836107b6565b90815182019660809283818a031261027c57610aa690602080809b0191016109a7565b9160ff8854166110c457908089928151903382528051858301527f1dcd50c4c92debb3d1423d3199f6b9479003e542483b3b36b3ec64477a0e51af60a0868301938451978851610af5816106da565b8783015288015115159760609889830152600180841b03978891015151168a820152a15180159081156110b8575b50156110a15781850196875143101561108a57815151610b42816106da565b610b4b816106da565b610db95750508984019384513403610da257610b663361089c565b5198610b718a6106da565b610b7a8a6106da565b6001998a03610d9c57885b15610d85578b8a91338b5260058252848b208360ff19825416179055848b2062ff00001981541690557f589509934715627b560265c45a0b5440abc748aedb98cadcf9828fe9e8a75c77828651858152a1015283610be1610a0c565b9584835116875251978c8701988952519183870192835201519289840193848111610d72578410610d6e5784908187019485528a888801524360a0880152610c27610922565b9651169788875251918c870192835251938387019485525195019485528988554389558151968b8801525190860152519084015251818301528152610c6b8161079b565b8051936001600160401b038511610d5b5750610c886002546106fa565b601f8111610d2c575b508491601f8511600114610ccb579394508492919083610cc0575b50501b916000199060031b1c191617600255565b015192503880610cac565b6002815285812093958591601f198316915b88838310610d125750505010610cf9575b505050811b01600255565b015160001960f88460031b161c19169055388080610cee565b858701518855909601959485019487935090810190610cdd565b610d559060028452868420601f870160051c8101918888106104e557601f0160051c01906110f2565b38610c91565b634e487b7160e01b835260419052602482fd5b8880fd5b634e487b7160e01b8a5260118c5260248afd5b825163100960cb60e01b81526014818d0152602490fd5b89610b85565b815163100960cb60e01b81526013818c0152602490fd5b8198979695939991515198610dcd8a6106da565b610dd68a6106da565b6001809a14610def575b50505050505050505050505050565b518301518152346110735788610e088b8351511661089c565b51610e12816106da565b610e1b816106da565b0361105c578984511633036110455790818880808f989796958e8291515116998801998a519082821561103c575bf1156110325789917f1ef2481f5020b5b66e408f78061db098ee18301124d9ab186eda3a3e48c2bf8d8e8d86945151168c52600581528b848120558351858152a1015282610e95610a0c565b83518b16815294518c86019081529651828601908152920151600019998a82019391841161101f5784908187019485528a888801524360a0880152610ed8610922565b9651169788875251918d870192835251938387019485525195019485528a88554389558151968c8801525190860152519084015251818301528152610f1c8161079b565b8051946001600160401b038611610d5b5750610f396002546106fa565b601f8111610ff0575b508591601f8611600114610f89579495508592919083610f7e575b50501b9260031b1c1916176002555b38808080808080808080808080610de0565b015193503880610f5d565b6002815286812093969394938691601f198316915b89838310610fd65750505010610fbe575b50505050811b01600255610f6c565b01519060f88460031b161c1916905538808080610faf565b858701518955909701969485019488935090810190610f9e565b6110199060028452878420601f880160051c8101918989106104e557601f0160051c01906110f2565b38610f42565b634e487b7160e01b895260118c52602489fd5b82513d8a823e3d90fd5b506108fc610e49565b825163100960cb60e01b81526017818d0152602490fd5b825163100960cb60e01b81526016818d0152602490fd5b825163100960cb60e01b81526015818d0152602490fd5b825163100960cb60e01b81526012818d0152602490fd5b815163100960cb60e01b81526011818c0152602490fd5b90506001541438610b23565b815163100960cb60e01b81526010818a0152602490fd5b855163100960cb60e01b8152600f81870152602490fd5b8181106110fd575050565b600081556001016110f2565b600490600092828454036113595761111f6107b6565b92835184019360808186031261027c576111409060208080970191016109a7565b9060ff815416611341576040937faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907226060865133815283518982015288840151151588820152a1518015908115611335575b501561131e57838201928351431061130757346112f05760606001917f1d848c47ba128678edffdaeade3e376ff672e7da782bc111ce4fea9b80d1c317888851858152a101526111df610a0c565b606060018060a01b038451169384835287810151958689850152518784015201519081606082015287608082015260a043910152869380159283156112a3575b505050156102805784808093819382821561129a575bf11561128f57508180558160015561124e6002546106fa565b8061125857505050565b601f811160011461126a575050600255565b6002835281832061128691601f0160051c8101906001016110f2565b81208160025555565b51913d9150823e3d90fd5b506108fc611235565b9082819394965002908382048314841517156112dd5781956112ca5750041438808061121f565b634e487b7160e01b895260129052602488fd5b634e487b7160e01b895260119052602488fd5b845163100960cb60e01b8152601c81840152602490fd5b845163100960cb60e01b8152601b81840152602490fd5b602490601a85519163100960cb60e01b8352820152fd5b90506001541438611191565b60249060196040519163100960cb60e01b8352820152fd5b60405163100960cb60e01b8152601881850152602490fdfea164736f6c6343000811000a`,
  BytecodeLen: 5847,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:80:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:32:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Attendee_iWillGo": Attendee_iWillGo,
  "Checkin_theyCame": Checkin_theyCame,
  "Checkin_timesUp": Checkin_timesUp
  };
export const _APIs = {
  Attendee: {
    iWillGo: Attendee_iWillGo
    },
  Checkin: {
    theyCame: Checkin_theyCame,
    timesUp: Checkin_timesUp
    }
  };
