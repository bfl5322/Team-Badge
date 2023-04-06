import { LitElement, html, css } from 'lit';
import './team-badge.js';

class teamresource extends LitElement {
    static get tag() {
        return 'team-resource';
    }

    static properties = {
        header: { type: String },
        detail: { type: String },
        team: { type: Array },
      }

    static get styles() {
        return css`
        :host {
            display: block;
        }
<<<<<<< HEAD
        .wrapper {
            border: 1px solid black;
            display: inline-block;
            width: 40%;
            
            
        }
=======
        
>>>>>>> c37a8c770595e781e695b6dc827c78c2127ca8c6
        .item {
            padding: 20px;
            width: 100%;
            height: 50px;
            
        }
        
    `;
    }



constructor() {
    super();
    this.team = [
      {
        "name": "Amazon Cognito",
<<<<<<< HEAD
        "image": "https://www.pikpng.com/transpng/bTowmb/",
=======
        "image": "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
>>>>>>> c37a8c770595e781e695b6dc827c78c2127ca8c6
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
    },
    {
<<<<<<< HEAD
        "name": "Amazon I AM",
=======
        "name": "Amazon | AM",
>>>>>>> c37a8c770595e781e695b6dc827c78c2127ca8c6
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Philadelphia_76ers_Logo.svg/990px-Philadelphia_76ers_Logo.svg.png?20170916111445",
        "location": "Philadelphia, PA",
        "wins": "49",
        "losses": "26",
        "Hof": "9" 
    },
    {
<<<<<<< HEAD
        "name": "Signing for AWS Web Services",
=======
        "name": "Signing up for AWS Web Services",
>>>>>>> c37a8c770595e781e695b6dc827c78c2127ca8c6
        "image": "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
        "location": "New York, NY",
        "wins": "42",
        "losses": "33",
        "Hof": "22" 
    },
    {
<<<<<<< HEAD
        "name": "AWS-LAMDA Phase 1",
=======
        "name": "AWS - LAMBDA Phase 1",
>>>>>>> c37a8c770595e781e695b6dc827c78c2127ca8c6
        "image": "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
        "location": "Boston, MA",
        "wins": "52",
        "losses": "23",
        "Hof": "37" 
    },
    {
        "name": "Amazon S3 Phase 1",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1024px-Brooklyn_Nets_newlogo.svg.png",
        "location": "Brooklyn, Nets",
        "wins": "40",
        "losses": "35",
        "Hof": "11" 
    }
    ]
  }

  render() {
    return html`

            ${this.team.map(team => html`
            <div class="item">
                <team-badge name="${team.name}" image="${team.image}" location="${team.location}" wins="${team.wins}" losses="${team.losses}" Hof="${team.Hof}"></team-badge>
            </div>
            `)}
    `;
  }
}
  

customElements.define('team-resource', teamresource);
