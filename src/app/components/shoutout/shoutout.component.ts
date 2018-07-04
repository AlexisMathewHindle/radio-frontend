import { Component, OnInit } from '@angular/core';

import { ShoutoutService } from '../../services/shoutout.service';

@Component({
  selector: 'app-shoutout',
  templateUrl: './shoutout.component.html',
  styleUrls: ['./shoutout.component.scss']
})
export class ShoutoutComponent implements OnInit {

  selectedTime: string = new Date().toUTCString();
  shoutMessage: string;
  shoutTo: string;
  shoutOutDate = false;
  text: string;

  constructor(private shoutoutService: ShoutoutService) { }

  ngOnInit() {}

  shoutOutLaterShow() {
    this.shoutOutDate = true;
  }

  shoutOutLater() {
    const selected = this.selectedTime;
    const dateTime = selected.getFullYear()
                      + '/' + (selected.getMonth() + 1)
                      + '/' + selected.getDate() + ' '
                      + selected.getHours() + ':'
                      + selected.getMinutes()
                      + ':' + selected.getSeconds();

    const shoutPost = {
        text: this.shoutMessage,
        scheduled: dateTime
      };

      this.shoutoutService.postShout(shoutPost)
        .subscribe(
          (response) => console.log(response)
        );

  }

  shoutOutNow() {
    const shoutPost = {
        text: this.shoutMessage,
        scheduled: this.selectedTime
      };

    this.shoutoutService.postShout(shoutPost)
      .subscribe(
        (response) => console.log(response)
      );

      // Client ID and API key from the Developer Console
      const client_id = '471745888583-9tbv54vohv14hdprl53stulma6v1rt9j.apps.googleusercontent.com';
      const api_key = 'AIzaSyABy0Vz49XS1OAf1bCYWq8dZKFim9KYaBQ';

      // Array of API discovery doc URLs for APIs used by the quickstart
      const discovery_docs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const scopes = 'https://www.googleapis.com/auth/calendar.readonly';

      const authorization = document.getElementById('authorize-button');
      const signoutButton = document.getElementById('signoutButton');

      this.handleClientLoad();
      this.initClient();

      // Google calendar event
      const calendarEvent = {
          'summary': 'shoutout coming soon',
          'sendNotifications': true,
          'description': 'Shoutout for you coming soon',
          'start': {
            'dateTime': shoutPost.scheduled,
          },
          'attendees': [
            {'email': this.shoutTo }
          ]
      };

      const request = gapi.client.calendar.events.insert({
        'calendarId': this.shoutTo,
        'resource': event
      });

      request.execute(function(event) {
        appendPre('Event created:' + event.htmlLink);
      });
      console.log(calendarEvent, 'calendarEvent');
}

/**
*  On load, called to load the auth2 library and API client library.
*/
handleClientLoad() {
  gapi.load('client:auth2', this.initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */

 initClient() {
   gapi.client.init({
     apiKey: api_key,
     clientId: client_id,
     discoveryDocs: discovery_docs,
     scope: scopes,
   }).then(function() {
     // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
 }

  /**
  *  Called when the signed in status changes, to update the UI
  *  appropriately. After a sign-in, the API is called.
  */

 updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      listUpcomingEvents();
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  /**
  *  Sign in the user upon button click.
  */

  handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
  *  Sign out the user upon button click.
  */

  handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

/**
* Append a pre element to the body containing the given message
* as its text node. Used to display the results of the API call.
*
* @param {string} message Text to be placed in pre element.
*/
appendPre(message) {
  const pre = document.getElementById('content');
  const textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

 listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {
      const events = response.result.items;
      appendPre('Upcoming events:');

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          const event = events[i];
          const when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          appendPre(event.summary + ' (' + when + ')');
        }
      } else {
        appendPre('No upcoming events found.');
      }
    });
  }
}
