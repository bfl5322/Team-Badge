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
            display: flex;
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
        "name": "The Milwaukee Bucks",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
    },
    {
        "name": "The Milwaukee fut",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
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
        "name": "",
        "image": "https://play-lh.googleusercontent.com/bXpwOYyoSr8PdQmFFmzADtGE-1ZATkQZ_qIWl2pyrqxAfCMjzB4feWFp1gvweSUbMJM=w240-h480-rw",
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
    },
    {
        "name": "The Milwaukee Bucks",
        "image": "https://play-lh.googleusercontent.com/bXpwOYyoSr8PdQmFFmzADtGE-1ZATkQZ_qIWl2pyrqxAfCMjzB4feWFp1gvweSUbMJM=w240-h480-rw",
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
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