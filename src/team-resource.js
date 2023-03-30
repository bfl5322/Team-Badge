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
        .wrapper {
            border: 2px solid black;
            display: inline-block;
            width: 45%;
        }
        .item {
            display: inline-flex;
            
        }
    `;
    }



constructor() {
    super();
    this.team = [
      {
        "name": "Milwaukee Bucks",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
    },
    {
        "name": "Philadelphia 76ers",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Philadelphia_76ers_Logo.svg/990px-Philadelphia_76ers_Logo.svg.png?20170916111445",
        "location": "Philadelphia, PA",
        "wins": "49",
        "losses": "26",
        "Hof": "9" 
    },
    {
        "name": "New York Knicks",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
        "location": "New York, NY",
        "wins": "42",
        "losses": "33",
        "Hof": "22" 
    },
    {
        "name": "Boston Celtics ",
        "image": "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
        "location": "Boston, MA",
        "wins": "52",
        "losses": "23",
        "Hof": "37" 
    },
    {
        "name": "Brooklyn Nets",
        "image": "https://play-lh.googleusercontent.com/bXpwOYyoSr8PdQmFFmzADtGE-1ZATkQZ_qIWl2pyrqxAfCMjzB4feWFp1gvweSUbMJM=w240-h480-rw",
        "location": "Brooklyn, Nets",
        "wins": "40",
        "losses": "35",
        "Hof": "11" 
    }
    ]
  }

  render() {
    return html`
        <div class="wrapper">
            ${this.team.map(team => html`
            <div class="item">
                <team-badge name="${team.name}" image="${team.image}" location="${team.location}" wins="${team.wins}" losses="${team.losses}" Hof="${team.Hof}"></team-badge>
            </div>
            `)}
        </div>
    `;
  }
}
  

customElements.define('team-resource', teamresource);
