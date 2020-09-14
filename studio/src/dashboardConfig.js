export default {
  widgets: [
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
                  buildHookId: '5f5f67c6ad38282184f4417b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vrv3dp7h',
                  apiId: '8a08971e-a839-41b4-91d1-00418ace67da'
                },
                {
                  buildHookId: '5f5f67c6fff3672242b9ab0c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jgmian3i',
                  apiId: 'cd684b40-e670-4183-9883-2cf1f0c040bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ssanusi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jgmian3i.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
