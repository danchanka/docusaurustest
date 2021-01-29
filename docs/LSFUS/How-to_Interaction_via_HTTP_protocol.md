---
title: 'How-to: Interaction via HTTP protocol'
---

##### Example 1

###### Task

We have a certain set of cities associated with their countries.



The url to which the HTTP request should be sent will look like this:   http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018 .

The response JSON will look like this:

  

    {
        "order": [
            {
                "nm": "42"
            },
            {
                "nm": "65"
            }
        ]
    }
