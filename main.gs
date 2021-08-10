function cleanUp() {
	var query = GmailApp.search("{(older_than:7d label:1-week) (older_than:1m label:1-month)}");    
	const TimeToWait = 2*60*60*1000

		if (query.length == 500) {
			ScriptApp.newTrigger('continueCleanUp')
				.timeBased()
				.after(TimeToWait)
				.create();
		}
	query.map(q => q.moveToTrash())

}

function deleteTriggerById(triggerID) {
	var triggers = ScriptApp.getProjectTriggers();
	for (i = 0; i < triggers.length; i++) {
		if (triggers[i].getUniqueId() == triggerID) ScriptApp.deleteTrigger(triggers[i]);    
	}

}

function continueCleanUp(event) {
	if (event) deleteTriggerById(event.triggerUid);  
	cleanUp();

}
