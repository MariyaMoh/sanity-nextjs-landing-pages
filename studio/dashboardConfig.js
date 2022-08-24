export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63062614ea0f950058feb61b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sojbossw',
                  apiId: 'b5416f7a-fc53-4ace-80ef-0540e99b50ed'
                },
                {
                  buildHookId: '6306261576f12c006cbde181',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zca3v3ie',
                  apiId: 'd64800dc-89a4-4780-8d73-e9d79c4205d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MariyaMoh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zca3v3ie.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
