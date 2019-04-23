/* composeK */
//En desuso desde v0.26.0
 const get = R.curry((propName, obj) => Maybe(obj[propName]))

 //  getStateCode :: Maybe String -> Maybe String
 const getStateCode = R.composeK(
   R.compose(Maybe.of, R.toUpper),
   get('state'),
   get('address'),
   get('user'),
 );
 getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 getStateCode({}); //=> Maybe.Nothing()




/* Función composeP */
//En desuso desde v0.26.0
const db = {
  users: {
    JOE: {
      name: 'Joe',
      followers: ['STEVE', 'SUZY']
    }
  }
}

// We'll pretend to do a db lookup which returns a promise
const lookupUser = (userId) => Promise.resolve(db.users[userId])
const lookupFollowers = (user) => Promise.resolve(user.followers)
lookupUser('JOE').then(lookupFollowers)

//  followersForUser :: String -> Promise [UserId]
const followersForUser = R.composeP(lookupFollowers, lookupUser);
followersForUser('JOE').then(followers => console.log('Followers:', followers))
// Followers: ["STEVE","SUZY"]




/* composeWith */
const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));

composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined