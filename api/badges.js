export default async function handler(req, res) {
    const search = req.query.search || '';
    var roster = [
        {
            "name": "Amazon Cognito",
            "image": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
            "location": "Milwaukee, WI",
            "wins": "53",
            "losses": "12",
            "Hof": "15" 
        },
        {
            "name": "Amazon I AM",
            "image": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
            "location": "Philadelphia, PA",
            "wins": "49",
            "losses": "26",
            "Hof": "9" 
        },
        {
            "name": "Signing up for AWS Web Services",
            "image": "https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg",
            "location": "New York, NY",
            "wins": "42",
            "losses": "33",
            "Hof": "22" 
        },
        {
            "name": "AWS - LAMBDA Phase 1",
            "image": "https://khalilstemmler.com/img/blog/serverless/aws-lambda.png",
            "location": "Boston, MA",
            "wins": "52",
            "losses": "23",
            "Hof": "37" 
        },
        {
            "name": "Amazon S3 Phase 1",
            "image": "https://www.cleo.com/sites/default/files/2018-10/logo_amazon-s3_module-11.png",
            "location": "Brooklyn, Nets",
            "wins": "40",
            "losses": "35",
            "Hof": "11" 
        }
    ];
    roster.map((team) => {
      team.index = team.name.toLowerCase();
    });
    roster = roster.filter((team) => {
      return team.index.indexOf(search.toLowerCase()) > -1;
    });
    console.log(roster);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }
 
  