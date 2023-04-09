import { LitElement, html, css } from 'lit';
import './team-badge.js';
import "./search-bar.js";


class teamresource extends LitElement {
    static get tag() {
        return 'team-resource';
    }

    static properties = {
        header: { type: String },
        detail: { type: String },
        teams: { type: Array },
      }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        
        .item {
            padding: 20px;
<<<<<<< HEAD
            width: 100%;  
=======
            width: 100%;
            
>>>>>>> 2e1b182becbf514867655117ff43d7a621f0b8fb
        }
        
    `;
    }



constructor() {
    super();
    this.teams = [];
    this.getSearchResults().then((results) => {
        this.teams = results;
    })
  }

  async getSearchResults(value = ''){
    const address = `/api/badges?search=${value}`;
    const results = await fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        return data;
    });
    return results;
  }

  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.teams = await this.getSearchResults(term);
  }

  render() {
    return html`
    <search-bar @value-changed="${this._handleSearchEvent}"></search-bar>
        <div class="wrapper">
            ${this.teams.map(team => html`
            <div class="item">
                <team-badge name="${team.name}" image="${team.image}" location="${team.location}" wins="${team.wins}" losses="${team.losses}" Hof="${team.Hof}"></team-badge>
            </div>
            `)}
        </div>
    `;
  }
}
  

customElements.define('team-resource', teamresource);
