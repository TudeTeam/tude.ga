module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_easings.scss";
          @import "@/scss/_global.scss";
        `
      }
    }
  },
  pages: {
    index: {
      entry: 'src/pages/index/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Tude'
    },
    notfound: {
      entry: 'src/pages/404/main.ts',
      template: 'public/index.html',
      filename: '404.html',
      title: '404 not found - Tude'
    },
    'legal': {
      entry: 'src/pages/legal/index.ts',
      template: 'public/index.html',
      filename: 'legal/index.html',
      title: 'Legal - Tude'
    },
    'legal/imprint': {
      entry: 'src/pages/legal/imprint.ts',
      template: 'public/index.html',
      filename: 'legal/imprint/index.html',
      title: 'Tude Imprint'
    },
    'legal/terms': {
      entry: 'src/pages/legal/terms.ts',
      template: 'public/index.html',
      filename: 'legal/terms/index.html',
      title: 'Tude Terms of Service'
    },
    'legal/privacy': {
      entry: 'src/pages/legal/privacy.ts',
      template: 'public/index.html',
      filename: 'legal/privacy/index.html',
      title: 'Tude Privacy Policy'
    },
    'legal/privacy/linjo': {
      entry: 'src/pages/legal/privacyLinjo.ts',
      template: 'public/index.html',
      filename: 'legal/privacy/linjo/index.html',
      title: 'Linjo Privacy Policy'
    },
    'legal/terms/tudeapi': {
      entry: 'src/pages/legal/termsTudeapi.ts',
      template: 'public/index.html',
      filename: 'legal/terms/tudeapi/index.html',
      title: 'TudeAPI Terms of Service'
    },
    'legal/terms/freestuff': {
      entry: 'src/pages/legal/termsFreeStuff.ts',
      template: 'public/index.html',
      filename: 'legal/terms/freestuff/index.html',
      title: 'FreeStuff Terms of Service'
    },
    'legal/privacy/freestuff': {
      entry: 'src/pages/legal/privacyFreeStuff.ts',
      template: 'public/index.html',
      filename: 'legal/privacy/freestuff/index.html',
      title: 'FreeStuff Privacy Policy'
    },
    'about': {
      entry: 'src/pages/about/main.ts',
      template: 'public/index.html',
      filename: 'about/index.html',
      title: 'About Tude'
    },
    'club': {
      entry: 'src/pages/club/main.ts',
      template: 'public/index.html',
      filename: 'club/index.html',
      title: 'Tude Club'
    },
    // subpage: 'src/pages/index/main.ts'
  }
}