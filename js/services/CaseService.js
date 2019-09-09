app.factory('cases', ['$http', function($http) {
    var casesObject = [
        {
            "title": "Collab",
            "description": "Collab is an app used to make planning trips with friends quick and straightforward, allowing you to stay sane and stress free.",
            "subtext": "UX Case Study || General Assembly",
            "thumb_url": "../images/cases/collab-thumb.png",
            "button_text": "Read about my design process",
            "button_url": "https://docs.google.com/presentation/d/12sdkxHmO2PsA5UsKf8nIDdXiVwXMhSGc8vDJjsnt-EY/edit?usp=sharing",
            "background_color": "purple",
            "picture_position": true
        },
        {
            "title": "Eno, your Capital One assistant",
            "description": "As the lead enterprise designer for integrating Eno into Capital One's servicing platform, I was focused on creating a seamless experience across many channels, including web, mobile and our tablet applcations.",
            "subtext": "\"The first natural language intelligent assistant from a US bank!\"",
            "thumb_url": "../images/cases/eno-thumb.png",
            "button_text":"See more of the experience",
            "button_url":"https://dribbble.com/shots/7089314-Eno-Your-Capital-One-Assistant",
            "background_color": "teal",
            "custom_styles": "top: -57px;",
            "picture_position": true
        },
        {
            "title": "Embracing Design Systems",
            "description": "I left my footprint at Capital One by establishing our very first version of a design system to house both developer and designer documentation. Today, this is used across product teams as a single source of truth to enable designers to design with speed and accuracy.",
            "thumb_url": "../images/cases/design-systems-thumb.png",
            "button_text":"Get a sneak peek",
            "button_url":"https://dribbble.com/shots/7066379-Capital-One-EASE-Design-System",
            "background_color": "blue",
            "picture_position": true
        },
        {
            "title": "Account Setup: A Framework for All",
            "description": "Creating enterprise-wide solutions for each feature is the most challenging aspect of my role on the flagship team at Capital One. This is greatly exemplified in my work creating a flexible account setup experience which fits the needs of all our customers - Bank, Credit Card, Auto Loan, etc.",
            "thumb_url": "../images/cases/account-setup-thumb.png",
            "button_text":"See more of the experience",
            "button_url":"https://dribbble.com/shots/7083856-Single-vs-Multiple-Account-Setup",
            "background_color": "green",
            "picture_position": false
        }
    ];

    return casesObject;
  }]);