// 动态加载博客文章
document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list");
    if (blogList) {
        const blogs = [
            { title: "第一篇博客", link: "#" },
            { title: "第二篇博客", link: "#" },
            { title: "第三篇博客", link: "#" }
        ];

        blogs.forEach(blog => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = blog.link;
            a.textContent = blog.title;
            li.appendChild(a);
            blogList.appendChild(li);
        });
    }

    // 处理联系表单提交
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("感谢您的留言！我们会尽快与您联系。");
            contactForm.reset();
        });
    }
});
