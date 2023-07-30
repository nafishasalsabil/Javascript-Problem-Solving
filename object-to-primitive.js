let user = {
    title: "qwertyu",
    author:"author",
    page: 200,
  
    // for hint="string"
    toString() {
      return `{Title: "${this.title}" Author: "${this.author}" Pages: "${this.page}"}`;
    },
  };

  console.log(user.toString());