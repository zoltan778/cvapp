const data = 
[
    {
      "header": "basics",
      "inputs" : [
        {"label": "name", "type": "text"},
        {"label": "label", "type": "text"},
        {"label": "picture", "type": "file"},
        {"label": "email", "type": "email"},
        {"label": "phone", "type": "tel"},
        {"label": "degree", "type": "text"},
        {"label": "website", "type": "url"},
        {"label": "summary", "type": "textarea"},
        {"header2": "location", 
          "inputs": [
            {"label": "address", "type": "text"},
            {"label": "postalCode", "type": "text"},
            {"label": "city", "type": "text"},
            {"label": "countryCode", "type": "text"},
            {"label": "region", "type": "text"}
          ] 
        },
      ]
    },
    {
      "header": "profiles",
      "inputs": [
        {"label": "network", "type": "text"},
        {"label": "username", "type": "text"},
        {"label": "url", "type": "url"},
      ]
    },
    {
      "header": "work",
      "inputs": [[
        {"label": "company", "type": "text"},
        {"label": "position", "type": "text"},
        {"label": "website", "type": "url"},
        {"label": "startDate", "type": "date"},
        {"label": "endDate", "type": "date"},
        {"label": "summary", "type": "textarea"},
        {"header2": "highlights", 
        "inputs": [
          {"label": "highlight-1", "type": "text"},
        ]}
      ]]
    },
    {
      "header": "volunteer",
      "inputs": [[
        {"label": "organization", "type": "text"},
        {"label": "position", "type": "text"},
        {"label": "website", "type": "url"},
        {"label": "start date", "type": "date"},
        {"label": "end date", "type": "date"},
        {"label": "position", "type": "text"},
        {"label": "summary", "type": "text"},
        {"header2": "highlights", 
        "inputs": [
          {"label": "highlight-1", "type": "text"},
        ]}
      ]]
    },
    {
      "header": "education",
      "inputs": [[
        {"label": "institution", "type": "textarea"},
        {"label": "area", "type": "textarea"},
        {"label": "studyt type", "type": "text"},
        {"label": "start date", "type": "date"},
        {"label": "end date", "type": "date"},
        {"label": "gpa", "type": "text"},
        {"header2": "courses", 
        "inputs": [
          {"label": "course-1", "type": "text"},
        ]}
      ]]
    },
    {
      "header": "awards",
      "inputs": [[
        {"label": "title", "type": "text"},
        {"label": "date", "type": "date"},
        {"label": "awarder", "type": "textarea"},
        {"label": "summary",  "type": "textarea"}
      ]]
    },
    {
      "header": "publications",
      "inputs": [[
        {"label": "title", "type": "text"},
        {"label": "publisher", "type": "textarea"},
        {"label": "release date", "type": "date"},
        {"label": "website",  "type": "url"},
        {"label": "summary",  "type": "textarea"}
      ]]
    },
    {
      "header": "skills",
      "inputs": [[
        {"label": "name", "type": "text"},
        {"label": "level", "type": "text"},
        {"header2": "keywords", 
        "inputs": [
          {"label": "keyword-1", "type": "text"},
        ]}
      ]]
    },
    {
      "header": "languages",
      "inputs": [[
        {"label": "language", "type": "text"},
        {"label": "fluency", "type": "text"}
      ]]
    },
    {
      "header": "interests",
      "inputs": [[
        {"label": "name", "type": "text"},
        {"header2": "keywords", 
        "inputs": [
          {"label": "keyword-1", "type": "text"},
        ]}
      ]]
    }
];

  export default data;
  