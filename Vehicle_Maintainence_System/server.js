
const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {

       const vehicles= [
        {
            "TaskID": "b704056d-dfaf-4928-8e63-aa97baecfac5",
            "Duration": 8,
            "Impact": 8
        },
        {
            "TaskID": "2be53f42-0228-414e-bf6c-98dd4c14676a",
            "Duration": 6,
            "Impact": 2
        },
        {
            "TaskID": "0ca1feca-1858-4248-8958-cdc4788004b2",
            "Duration": 4,
            "Impact": 8
        },
        {
            "TaskID": "337eb248-9090-4789-99c1-cd1506259fbf",
            "Duration": 3,
            "Impact": 8
        },
        {
            "TaskID": "6af88141-bc83-4fbe-ad4d-369a7fc8ee65",
            "Duration": 4,
            "Impact": 10
        },
        {
            "TaskID": "6dbb3b6b-9d1b-40ec-919d-2a8bfebff645",
            "Duration": 2,
            "Impact": 1
        },
        {
            "TaskID": "db3e28c2-9c88-495e-814f-3d28dfccdc76",
            "Duration": 8,
            "Impact": 4
        },
        {
            "TaskID": "2589b4ba-d4b0-40fd-a107-601a548dfc72",
            "Duration": 1,
            "Impact": 10
        },
        {
            "TaskID": "a9aa02fb-5ec4-442b-b652-e8153cbf849d",
            "Duration": 4,
            "Impact": 4
        },
        {
            "TaskID": "d577741d-c188-41db-9475-8a81bd6d56a4",
            "Duration": 3,
            "Impact": 9
        },
        {
            "TaskID": "2b2ee764-f545-491a-9e4b-6a1a2ea1feb1",
            "Duration": 8,
            "Impact": 4
        },
        {
            "TaskID": "26ca0347-50cd-4418-a8a6-e74f981af9c9",
            "Duration": 3,
            "Impact": 1
        },
        {
            "TaskID": "08732acb-36f9-49b3-ac35-80c42aa157be",
            "Duration": 2,
            "Impact": 4
        },
        {
            "TaskID": "4149e676-5cd9-46c3-800c-1314d6e497d7",
            "Duration": 1,
            "Impact": 2
        },
        {
            "TaskID": "389110f4-ab2e-4dd9-9dab-ce3cd3f20668",
            "Duration": 5,
            "Impact": 5
        },
        {
            "TaskID": "f285af8b-6dee-4798-acea-237d93beef74",
            "Duration": 7,
            "Impact": 6
        },
        {
            "TaskID": "759bd586-672c-45c5-bcde-fc57ea30bc8c",
            "Duration": 8,
            "Impact": 5
        },
        {
            "TaskID": "d105f969-1643-4b98-a7ef-bd8c1794910a",
            "Duration": 5,
            "Impact": 8
        },
        {
            "TaskID": "200029d5-c2e4-496f-9325-b293b2a2c19f",
            "Duration": 6,
            "Impact": 4
        },
        {
            "TaskID": "fc3953de-8f75-4ecd-9c12-b521d0f2f1d1",
            "Duration": 8,
            "Impact": 2
        },
        {
            "TaskID": "c53da298-f80d-4a42-8813-1a15c72af99f",
            "Duration": 6,
            "Impact": 1
        },
        {
            "TaskID": "621d8965-c153-439d-bf51-c146a8283dd4",
            "Duration": 8,
            "Impact": 3
        },
        {
            "TaskID": "3d532843-5fb8-4599-ba19-0276ef39e9b9",
            "Duration": 8,
            "Impact": 7
        },
        {
            "TaskID": "6e9bc415-4ca8-4485-b264-7c27f83412ef",
            "Duration": 3,
            "Impact": 1
        },
        {
            "TaskID": "3ca248b1-030b-4095-8972-bf893d13c41b",
            "Duration": 8,
            "Impact": 4
        },
        {
            "TaskID": "4432d3a3-3afc-4bf0-9252-47ecf40b5478",
            "Duration": 5,
            "Impact": 9
        },
        {
            "TaskID": "d4ba3ac3-54ff-4ab0-8ac9-0a7c67dfc85c",
            "Duration": 3,
            "Impact": 3
        },
        {
            "TaskID": "4349bbf7-90ac-45cf-a27c-63f3559b5650",
            "Duration": 4,
            "Impact": 6
        },
        {
            "TaskID": "b7cdea5d-fb81-47b5-a416-98f9eed19e01",
            "Duration": 7,
            "Impact": 1
        },
        {
            "TaskID": "a10c386f-98df-4b6a-84ab-5d52c635dc0e",
            "Duration": 2,
            "Impact": 8
        },
        {
            "TaskID": "f52ebc6e-5fce-477b-8891-96b6bb8a088e",
            "Duration": 2,
            "Impact": 9
        },
        {
            "TaskID": "e6517b1f-f746-4f4b-9c08-5c6afc4c5ef5",
            "Duration": 4,
            "Impact": 1
        },
        {
            "TaskID": "9887f6b6-79eb-44c8-906a-2d5ede1944bd",
            "Duration": 3,
            "Impact": 5
        }
    ]
    const depots= [
        {
            "ID": 2,
            "MechanicHours": 135
        },
        {
            "ID": 3,
            "MechanicHours": 188
        },
        {
            "ID": 4,
            "MechanicHours": 97
        },
        {
            "ID": 5,
            "MechanicHours": 164
        }
    ]
        console.log(vehicles);
        console.log(depots);
        res.json({message:"Server is running"});
});
app.listen(3000, () => { 
    console.log('Server is Running on port 3000'); 
});
