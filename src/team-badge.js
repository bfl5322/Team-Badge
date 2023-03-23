import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import '@lrnwebcomponents/a11y-collapse/a11y-collapse.js';



const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class TeamBadge extends LitElement {
  static properties = {
    header: { type: String },
    team: { type: Array },
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--team-badge-text-color, #000);
    }
  img {
    width: 100%;
    height: 100%;
  }
  .card {
   transition: 0.3s;
   width: 30%;
   color: blue;
    border: 1px solid blueviolet;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  .wrapper {
   padding: 2px 16px;
   color: blue;  
   width: auto;
   }
   .details {
    color: blue;
   }
   .header{
    font-size: 50px;
   }
    .searchbar {
      width: 100%;
      position: relative;
      display: flex;
    }
  `;

  constructor() {
    super();
    this.header = 'NBA Encyclopedia';
    this.detail = 'Use the search bar to find your favorite team, and use the dropdown to learn more.';
    this.team = [
      {
        "name": "The Milwaukee Bucks",
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
    <div class="searchbar">
    <input type="text" placeholder="Search.." name="search">
    <button type="submit"><simple-icon icon="icons:search"></simple-icon></button>
    </div>
    
    <div class="header">
    <h1>${this.header}</h1>
    
    </div>
    <div class="details">
    <p>${this.detail}</p>
    </div>

    <div class="card">
    <img src="${this.team[0].image}" alt="Bucks" style="width:100%">
    <div class="wrapper">
    <h4><b>${this.team[0].name}</b></h4>

     <a11y-collapse icon="add" heading="<p> Bucks </p>">
     <p>Location: ${this.team[0].location}</p>
    <p>Wins: ${this.team[0].wins}</p>
    <p>Losses: ${this.team[0].losses}</p>
    <p>Hall of Famers: ${this.team[0].Hof}</p>
</a11y-collapse> 

    </div>
    </div>



    `;
  }
}

customElements.define('team-badge', TeamBadge);