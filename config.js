var config = {
    style: 'mapbox://styles/franzindustries/ckpw88z8703zy18mni11gw7t9',
    accessToken: 'pk.eyJ1IjoiZnJhbnppbmR1c3RyaWVzIiwiYSI6ImNrZXN6bDI0ZDE5ejMycm1yMzQ4YTcxcmkifQ.aL6yg8sRwBFNq_7Trmtw9Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Chinese Economic Influence in Central and Eastern Europe',
    subtitle: '',
    byline: '',
    footer: '<h2>Read the full report on Chinese state capture</h2><ul><li><strong>Lead Researcher</strong>: Martin Vladimirov</li><li><strong>Visualizations</strong>: Paul Franz</li></ul><br /><strong>Data:</strong> <a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a><br /><br /><img src="images/logo_csd.png" width="300" height="75" /><br /><br />&copy; Center for The Study of Democracy, 2021',
    chapters: [
        {
            id: '01',
            alignment: 'left',
            hidden: false,
            title: 'Economic Presence',
            image: '',
            description: 'China has engaged differentially with European region, segmenting its approach towards Northern, Southern, and Central and Eastern Europe (CEE). China has set up the 17+1 initiative in the CEE, including all former Communist countries.',
            location: {
                center: [19.01, 45.49],
                zoom: 4.65,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state_data',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'serbia',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'cce_greece',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'cce_states',
                     opacity: 1,
                     duration: 3000
                 }
            ],
            onChapterExit: [
              {
                  layer: 'state_data',
                  opacity: 0,
                  duration: 2000
              },
              {
                  layer: 'serbia',
                  opacity: 0,
                  duration: 2000
              }
            ]
        },
        {
            id: '02',
            alignment: 'left',
            hidden: false,
            title: 'Exploiting State Capture Risks',
            image: '',
            description: 'The lignite-fired Stanari thermal power plant, valuated at USD 674 million, is a typical case for state capture by oligarchic networks of domestic and Chinese companies that have secured preferential treatment from the Republika Srpska entity government in Bosnia and Herzegovina.<ul><li>The project was developed by the private Energy Financing Team (EFT), controlled by the Serbian businessman Vuk Hamovic with close ties to the ruling Republika Srpska government.</li><li>2/3 of the financing came from the China Development Bank that was guaranteed with a lien on EFT’s concession rights for the exploration of the nearby lignite mine.</li><li>Republika Srpska changed its laws to allow the possibility for the transfer of rights on the mine.</li><li>The government limited the costs for the plant operator by reducing the concession fees for coal power generation from 3.6% to 0.2% of total revenues, while completely exempting it from coal mining fees.</li></ul>',
            location: {
                center: [17.7854985, 44.7547679],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'satellite',
                     opacity: 1,
                     duration: 2000
                 }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '03',
            alignment: 'full',
            hidden: false,
            title: 'The Stanari Plant Today',
            image: '',
            description: 'The completed plant as of June 2021. <video width="100%" height="640" controls><source src="images/stanari.mp4" type="video/mp4"></video>',
            location: {
                center: [17.7854985, 44.7547679],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
              {
              layer: 'satellite',
              opacity: 0,
              duration: 4000
            }
            ]
        },
        {
            id: '04',
            alignment: 'full',
            hidden: false,
            title: 'Chinese Projects are Unevenly Concentrated in the Western Balkans',
            image: '',
            description: '<ul><li>Chinese investments in CEE have been focused in a few key sectors – transportation, energy, manufacturing, and telecommunications.</li><li>Chinese capital inflows in the region are a small share (2.7%) of the total Chinese investments in the world.</li><li>Yet, they represent a transfer of significant financial resources relative to the size of the economies from the region, especially in the Western Balkans.</li><li>The attractiveness of the Western Balkans versus EU member-states is that the Chinese investments do not need to comply with EU’s strict transparency, competition and environmental rules on issues such as public procurement, impact assessment and state aid.</li></ul><br /><br /><iframe width="100%" height="500" frameborder="0" src="maps/projects.html"></iframe>',
            location: {
                center: [17.950513, 45.302615],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: '05',
            alignment: 'full',
            hidden: false,
            title: 'Filling the gap for funding infrastructural and large-scale energy projects',
            image: '',
            description: 'Chinese projects and large-scale asset acquisitions in CEE that have been completed or are under execution are estimated at around USD 10.4 billion. The total pipeline of projects at different stages of development could be worth more than USD 51.5 billion.<br /><br /><iframe width="100%" height="500" frameborder="0" src="highchart/fdi/index.html"></iframe>',
            location: {
              center: [17.950513, 45.302615],
              zoom: 5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'state_data',
                  opacity: 1,
                  duration: 2000
              },
              {
                  layer: 'serbia',
                  opacity: 1,
                  duration: 2000
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '06',
            alignment: 'full',
            hidden: false,
            title: 'China filling the gap for funding infrastructural and large-scale energy projects in CEE',
            image: '',
            description: '<iframe width="100%" height="500" frameborder="0" src="highchart/completions/index.html"></iframe>',
            location: {
              center: [17.950513, 45.302615],
              zoom: 5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'state_data',
                  opacity: 1,
                  duration: 2000
              },
              {
                  layer: 'serbia',
                  opacity: 1,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'state_data',
                  opacity: 0,
                  duration: 2000
              },
              {
                  layer: 'serbia',
                  opacity: 0,
                  duration: 2000
              }
            ]
        },
        {
          // needs index data
            id: '07',
            alignment: 'left',
            hidden: false,
            title: 'Index of Chinese Economic Influence ',
            image: '',
            description: 'The different dimensions of the Chinese economic footprint include the structural trade dependence, the Chinese investment stocks, the level of financial flows and the Chinese corporate presence. An Index of Chinese Economic Influence in the region shows that: <ul><li>China has increased its influence in the region from just 0,46% of the economy in 2009 to 1.25% in 2019.</li><li>The regional average masks significant country differences with Czechia, Hungary, Serbia and Bosnia and Herzegovina having seen the biggest increase in Chinese economic influence.</li><li>The large increase in trade flows from China and the development of a number of large-scale infrastructure and energy projects have made these countries more vulnerable than others in the region.</li></ul>',
            location: {
              center: [17.950513, 45.302615],
              zoom: 5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'gov_index',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
              layer: 'gov_index',
              opacity: 0,
              duration: 2000
              }
            ]
        },
        {
            id: '08',
            alignment: 'left',
            hidden: false,
            title: 'Chinese economic footprint: growing by leaps and bounds',
            image: '',
            description: 'Since 2009, around USD 14 billion in Chinese funds have entered in the region in the form of grants, development loans, mergers and acquisition of domestic assets and concession agreements. This height graph shows the total value of these investments for FY 2009.',
            location: {
              center: [19.699919, 43.821952],
              zoom: 5,
              pitch: 51.50,
              bearing: -28.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'fdi',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'fdi',
                  opacity: 0,
                  duration: 1000
              }
            ]
        },
        {
            id: '09',
            alignment: 'left',
            hidden: false,
            title: 'China has become the single largest trading partner in the region',
            image: '',
            description: '<ul><li>The average bilateral trade deficit of the CEE countries with China has remained largely stable increasing from 2.4% of GDP in 2009 to 3.3% in 2019</li><li>In some countries such as Czechia the trade exposure to China has doubled to close to 6% of GDP.</li><li>A notable rise in the trade dependence on China is clearly visible also in most Western Balkan countries, which could be related to the growing imports of goods that Chinese companies have been using in the implementation of large infrastructure projects.</li></ul>',
            location: {
              center: [19.699919, 43.821952],
              zoom: 5,
              pitch: 51.50,
              bearing: -28.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'csd_2009_outflow',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'csd_2009_outflow',
                  opacity: 0,
                  duration: 1000
              }
            ]
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: '10 Years of Increasing Trade Flow',
            image: '',
            description: 'Here is the share of trade per country in 2019.',
            location: {
              center: [19.699919, 43.821952],
              zoom: 5,
              pitch: 51.50,
              bearing: -28.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'csd_2019_outflow',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'csd_2019_outflow',
                  opacity: 0,
                  duration: 1000
              }
            ]
        },
        {
            id: '11',
            alignment: 'full',
            hidden: false,
            title: 'Corporate Footprint',
            image: '',
            description: 'There are close to 10,000 firms in the region with Chinese ultimate beneficial ownership. Most of the big Chinese corporations operating in the region include:<ul><li>Electrical appliances manufacturer Gorenje,</li><li>International energy, mining and metallurgical enterprises including HBIS Group, Zijin Group, agricultural and logistical firms (COFCO, Syngenta and COSTCO),</li><li>The IT and telecommunication giants Ingram Micro (owned by the HNA Group) and Huawei,</li><li>The global textile company, Tom Tailor (owned by Fosun).</li></ul>The local subsidiaries of these handful of Chinese companies that are global leaders in their respective industries generate more than 90% of the Chinese-controlled revenue in the region.<iframe width="100%" height="500" frameborder="0" src="maps/companies_2map.html"></iframe>',
            location: {
                center: [17.547948, 45.326302],
                zoom: 4.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'cce_greece',
                  opacity: 1,
                  duration: 3000
              },
              {
                  layer: 'state_data',
                  opacity: 1,
                  duration: 2000
              },
              {
                  layer: 'serbia',
                  opacity: 1,
                  duration: 2000
              },
              {
                  layer: 'cce_states',
                  opacity: 1,
                  duration: 3000
              }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Structural Vulnerability to Chinese Economic Presence',
            image: '',
            description: 'Loan-based intergovernmental agreements have raised the specter of debt traps for the small regional economies. For some of the smaller economies like Montenegro and Bosnia and Herzegovina, Chinese-led projects make up around a quarter and a fifth of the countries’ GDP, respectively. This makes Chinese economic presence in these countries a structurally-indispensable factor.',
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
                  layer: 'csd_debt_gdp',
                  opacity: .9,
                  duration: 2000
              }ration: 3000
              }
            ],
            onChapterExit: [
              {
                  layer: 'csd_debt_gdp',
                  opacity: 0,
                  duration: 2000
              },
              {
                  layer: 'cce_greece',
                  opacity: 0,
                  duration: 3000
              },
              {
                  layer: 'cce_states',
                  opacity: 0,
                  duration: 3000
              }
            ]
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: 'Debt-trap Diplomacy',
            image: '',
            description: '<ul><li>The Chinese-funded and constructed project exemplifies the Chinese debt-trap diplomacy in the Western Balkans.</li><li>Both the IMF and the World Bank have suggested that such projects were fiscally irresponsible: they have contributed to the exponential growth of public debt, which has soared above 70% of Montenegro’s GDP.</li><li>The projects have had a limited direct contribution on economic growth as the loan agreement with Chinese ExIm Bank stipulated the involvement of the Chinese state-owned infrastructure company, China Road and Bridge Corporation, and the use of Chinese construction workers amid local unemployment rate of 15.7%.</li></ul>',
            location: {
                center: [19.345775, 42.530047],
                zoom: 15.92,
                pitch: 61,
                bearing: 35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'satellite',
                     opacity: 1,
                     duration: 4000
                 }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 4000
              }
            ]
        },
        {
            id: '14',
            alignment: 'left',
            hidden: false,
            title: 'Governance Impact',
            image: '',
            description: '<ul><li>The impact on the quality of governance in CEE is strongest in Serbia, Bosnia and Herzegovina and Montenegro</li><li>All Western Balkan countries with the exception of Kosovo, which does not host any major Chinese companies or projects, score above the CEE average of 2.7 for quality of governance.</li><li>There is positive correlation between the growing Chinese economic footprint over the last decade and the deterioration of governance standards with Hungary seen as the weakest link from the EU member states.</li></ul>',
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
                  layer: 'state_data',
                  opacity: 1,
                  duration: 2000
              },
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 2000
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: 'Taking Advantage of EU Funds and Uncompetitive Tender Procedures',
            image: '',
            description: 'China has been able to tap into EU regional funds in order to implement infrastructure projects in the region.<ul><li>In 2020, Chinese companies have doubled the amount of EU-based public procurement contracts they have secured to nearly EUR 2 billion (around EUR 3.9 billion in the last decade).</li><li>A case in point is the construction of the Pelješac bridge in Croatia, whose 85% of the costs were funded with EUR 357 million from the EU Cohesion Funds.</li><li>This is the first EU tender to be won by a Chinese company.</li><li>Yet as with China-led projects, there have been again allegations about the presence of anti-competitive practices in the bidding process</li></ul>',
            location: {
                center: [17.5309246, 42.9255175],
                zoom: 15,
                pitch: 55,
                bearing: 25
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'satellite',
                     opacity: 1,
                     duration: 4000
                 }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 4000
              }
            ]
        },
        {
            id: '16',
            alignment: 'left',
            hidden: false,
            title: 'Environmental Impact',
            image: '',
            description: 'Chinese energy projects appear particularly worrying due to their impact on global warming, air quality and emissions, landscape degradation and biodiversity. <ul><li>A long-lasting effect of the Chinese investment in CEE countries is what can be described as “a synergy of failures”:</li><ul><li>Delayed transition to cleaner forms of energy (in particular in Western Balkan countries),</li><li>Non-compliance with European environmental standards, and increased dependency on coal-fired power generation.</li><li>Delay of the unavoidable coal phase-out over the next decade with disastrous economic consequences in terms of stranded assets and painful transition for coal-dependent workers.</li></ul><li>The environmental impact assessment shows a positive correlation between the Chinese economic influence and an increase in green-house gas emissions but this negative environmental impact is bound to increase in the future as all carbon-intensive projects come online and the effect of the recently-constructed ones kick in.</li></ul>',
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
                  layer: 'env_index',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'env_index',
                  opacity: 0,
                  duration: 2000
              }
            ]
        },
        {
            id: '16B',
            alignment: 'left',
            hidden: false,
            title: 'Coal Fired Power',
            image: '',
            description: 'Here is the share of coal-fired power plants in these countries.',
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
                  layer: 'coal',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'coal',
                  opacity: 0,
                  duration: 2000
              }
            ]
        },
        {
            id: '16C',
            alignment: 'left',
            hidden: false,
            title: 'Renewable Share of Power',
            image: '',
            description: 'Here is the share of coal-fired power plants in these countries.',
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
                  layer: 'renew',
                  opacity: 0.8,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                  layer: 'renew',
                  opacity: 0,
                  duration: 2000
              }
            ]
        },
        {
            id: 'end',
            alignment: 'left',
            hidden: false,
            title: 'What’s Next?',
            image: 'images/china_ceec.jpeg',
            description: 'To counter the Chinese Economic Influence in Central and Eastern Europe, CSD calls for: <ul><li>A robust U.S. and EU response using a range of economic tools for building back the foundations for a low-carbon economic development,</li><li>EU-wide governance standards/screenings for Chinese investments,</li><li>The inclusion of the Western Balkans in the EU rule of law mechanism</li><li>An enhanced role for the Energy Community.</li></ul>',
            location: {
                center: [19.01, 45.49],
                zoom: 4.65,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'state_data',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'serbia',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'cce_greece',
                     opacity: 1,
                     duration: 3000
                 },
                 {
                     layer: 'cce_states',
                     opacity: 1,
                     duration: 3000
                 }
            ],
            onChapterExit: [

            ]
        }
    ]
};
