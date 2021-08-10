# Gmail cleaning script
## Description
Automatically removes messages labeled as `1 month` and `1 week` older than the corresponding period of time.

Labels are assigned by Gmail filters (Search dialog -> Create filter,[x] Apply label,[x] Apply to matching coversations).

## Installation
Create a new project in [Apps Script](https://script.google.com/), paste the code from [main.gs](main.gs).

Go to `Triggers` -> `Add trigger` and create a time-driven trigger for `cleanUp` function. I run the script once a week.

If the script has a lots of messages to delete it automatically creates a temporary trigger and deletes messages in batches of 500 threads every 2 hours.
To save your GAS runtime quotas after applying labels to a large number of messages you can search in Gmail:

    {(older_than:7d label:1-week) (older_than:1m label:1-month)} 
     
and delete all old messages manually.
