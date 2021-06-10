var config = {
    style: 'mapbox://styles/franzindustries/cknpah4xc36pi17p1j5wb6ecr',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Chinese Economic Influence in Central and Eastern Europe',
    subtitle: '',
    byline: '',
    footer: '<ul><li><strong>Lead Contributor</strong>: Martin Vladimirov</li><li><strong>Visualizations</strong>: Paul Franz</li></ul><br /><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a><br /><br /><img src="images/logo_csd.png" width="300" height="75" />',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change and Deadly Conflict in Africa',
            image: '',
            description: 'Africa is especially vulnerable to climate change, as millions are already experiencing record heat, extreme precipitation and rising sea levels. Increasingly, the security implications of changing weather patterns are visible in deadly land resource disputes between farmers and herders across the continent – including in the continent’s most populous country, Nigeria.',
            location: {
                center: [21.7241853, 45.3757894],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'nigeria_federal',
                     opacity: 0.3,
                     duration: 2000
                 },
                 {
                   layer: 'country-label',
                   opacity: 1,
                   duration: 3000
                 }
            ],
            onChapterExit: [
              {
              layer: 'nigeria_federal',
              opacity: 0,
              duration: 4000
            }
            ]
        },
        {
            id: 'end',
            alignment: 'left',
            hidden: false,
            title: 'Recommendations',
            image: 'images/farmer_herder.jpg',
            description: 'Crisis Group recommends that Nigerian authorities prioritise securing the funds they will need to implement the National Livestock Transformation Plan, building capacity for livestock management, and improving communication to better explain the plan to those affected. These steps can help ensure the sustainability of this vital effort to address the drivers of farmer-herder violence. <br /><br />Read more of Crisis Group’s work on farmer-herder violence and its causes <a href="https://www.crisisgroup.org/africa/west-africa/nigeria/288-violence-nigerias-north-west-rolling-back-mayhem" target="_blank">here</a> and <a href="https://www.crisisgroup.org/africa/west-africa/nigeria/262-stopping-nigerias-spiralling-farmer-herder-violence" target="_blank">here</a>.',
            location: {
              center: [21.7241853, 45.3757894],
              zoom: 3.5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'country-label',
                opacity: 1,
                duration: 3000
              },
              {
                  layer: 'nigeria_federal',
                  opacity: 0.3,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'country-label',
                opacity: 0,
                duration: 3000
              }
            ]
        }
    ]
};
