Stage 1:
So When the user is logged in:
    The System should check the year and semester of the user
    There are three events:
    Results
    Placements
    Events

    Placements
    The API endpoints are:
    1./api/placement/:semester
    Based on the year of the student this api should be called and any placement announcement for that year should be displayed as notification
    req.params=3;
    req.body:{
        "Name":"Kavya",
        "Roll no":"23csr108"
        "Year":"4"
    }
    res.data=[
        message:{Placement details of the year}
    ]

    
    Events
    2.api/Event/
    req.body:{
        "name":"name",
        "dept":"cse",
        "year":"3",
    }
    Based on the details of the student appropriate evenets hsould be rendered to the client as notification


    Results
    Based on the year and semester if the results is announced for them then the notification should be visible

    api/result/:semester

    req.body
    {
        rollno:rollno,
        name:name,
        dateofbirth:Dateofbirth
    }
    the response is the result page of the corrsponding user.
