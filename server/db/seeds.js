use planets;
db.dropDatabase();


db.planetInfo.insertMany([
    {
        "name": "Earth",
        "mass": 0.00315,
        "radius": 0.0892,
        "period": 365.2,
        "semi_major_axis": 1,
        "temperature": 288,
        "distance_light_year": 0,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 1,
        "img": "",
        "fun_facts": [{"Fact Number 1":"Earth is the only place we know of so far that is inhabited by living things"},
        {"Fact Number 2":"It is also the only planet in our solar system with liquid water on the surface."}]
      },
    {
        "name": "Venus",
        "mass": 0.00257,
        "radius": 0.0847,
        "period": 224.7,
        "semi_major_axis": 0.723332,
        "temperature": 737,
        "distance_light_year": 0.000004,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 0,
        "img": "",
        "fun_fact": ""
      },
    {
        "name": "Neptune",
        "mass": 0.0537,
        "radius": 0.346,
        "period": 59800,
        "semi_major_axis": 30.07,
        "temperature": 72,
        "distance_light_year": 0.000478,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 14,
        "img": "",
        "fun_fact": ""
      },
    {
        "name": "Pluto",
        "mass": 0.000007,
        "radius": 0.0166,
        "period": 90560,
        "semi_major_axis": 39.48,
        "temperature": 44,
        "distance_light_year": 0.000559,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 5,
        "img": "",
        "fun_fact": ""
      },
     {
        "name": "Uranus",
        "mass": 0.0457,
        "radius": 0.358,
        "period": 30589,
        "semi_major_axis": 19.191,
        "temperature": 76,
        "distance_light_year": 0.000304,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 27,
        "img": "",
        "fun_fact": ""
      },
    {
        "name": "Jupiter",
        "mass": 1,
        "radius": 1,
        "period": 4331,
        "semi_major_axis": 5.204,
        "temperature": 165,
        "distance_light_year": 0.000088,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 80,
        "img": "",
        "fun_fact": ""
      },
    {
        "name": "Mars",
        "mass": 0.000338,
        "radius": 0.0488,
        "period": 687,
        "semi_major_axis": 1.542,
        "temperature": 210,
        "distance_light_year": 0.000037,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 2,
        "img": "",
        "fun_fact": ""
      },
    {
        "name": "Saturn",
        "mass": 0.299,
        "radius": 0.843,
        "period": 10747,
        "semi_major_axis": 9.537,
        "temperature": 134,
        "distance_light_year": 0.00017,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 83,
        "img": "",
        "fun_fact": ""
      },
    {
        "name": "Mercury",
        "mass": 0.000174,
        "radius": 0.0341,
        "period": 88,
        "semi_major_axis": 0.387098,
        "temperature": 400,
        "distance_light_year": 0.000011,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 0,
        "img": "",
        "fun_fact": ["The smallest planet in our solar system and closest to the Sun"]
      }
]);