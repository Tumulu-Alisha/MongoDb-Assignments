

/*Atlanta Population*/

1. db.zipcodes.find( { $and: [ { city: 'ATLANTA' }, { state: 'GA' } ] } )
2. db.zipcodes.aggregate( [ { $match: { $and: [ { city: 'ATLANTA' }, { state: 'GA' } ] } } ] )
3. db.zipcodes.aggregate( [ 
        {$match: { city: 'ATLANTA'}},
        {$group: { _id: '$_id'} },
        { $count: 'unique_Zipcodes'}
    ])
    
    db.zipcodes.aggregate( [ 
        {$match: { city: 'ATLANTA'}},
        {$group: { _id: '$_id'} }
    ]).itcount()
    
    db.zipcodes.aggregate( [ 
        {$match: { city: 'ATLANTA'}},
        {$group: { _id: '$_id'} }
    ]).toArray().length
4. db.zipcodes.aggregate( [ 
        {$match: { city: 'ATLANTA'}},
        { $group: { _id : 'city' ,totalPopulationInAtlanta:{ $sum:'$pop' } } }
    ] )

/*POPULATION BY STATE*/

1. db.zipcodes.aggregate( [ { $group: { _id : '$state' ,totalPopulation:{ $sum:'$pop' } } } ] )

2. db.zipcodes.aggregate( [ 
        { $group: { _id : '$state' ,totalPopulation:{ $sum:'$pop' } } },
        { $sort : { totalPopulation: -1 } }
    ])

3. db.zipcodes.aggregate( [ 
        { $group: { _id : '$state' ,totalPopulation:{ $sum:'$pop' } } },
        { $sort : { totalPopulation: -1 } },
        { $limit: 3 }
    ])


/*POPULATIONS BY CITY*/


1. db.zipcodes.aggregate( [ { $group: { _id : { city: '$city' , state: '$state'} ,totalPopulation:{ $sum:'$pop' } } } ] )
2. db.zipcodes.aggregate( [ 
        { $group: { _id : { city: '$city' , state: '$state'} ,totalPopulation:{ $sum:'$pop' } } },
        { $sort : { totalPopulation: -1 } }
    ])
3. db.zipcodes.aggregate( [ 
        { $group: { _id : { city: '$city' , state: '$state'} ,totalPopulation:{ $sum:'$pop' } } },
        { $sort : { totalPopulation: -1 } },
        { $limit: 3 }
    ])
4.  db.zipcodes.aggregate( [ 
        { $group: { _id : { city: '$city' , state: '$state'} ,totalPopulation:{ $sum:'$pop' } } },
        { $match: { '_id.state': 'TX' } },
        { $sort : { totalPopulation: -1 } },
        { $limit: 3 }
    ])



/*BONUS*/

1.  db.zipcodes.aggregate( [                           
    { $group: { _id :'$state' ,
                avgPopulation:{ $avg:'$pop' } } }
    ])

2.