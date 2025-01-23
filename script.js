// 添加页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 搜索功能
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        navItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const shouldShow = text.includes(searchTerm);
            
            item.style.display = shouldShow ? 'flex' : 'none';
            if (shouldShow) {
                item.style.animation = 'fadeIn 0.3s ease forwards';
            }
        });
    });

    // 处理图片加载错误
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            const iconName = this.alt.toLowerCase();
            this.style.display = 'none';
            const icon = document.createElement('i');
            icon.className = `fas fa-${iconName}`;
            icon.style.fontSize = '2rem';
            icon.style.color = 'var(--secondary-color)';
            this.parentNode.insertBefore(icon, this);
        };
    });
});

// 添加平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 关注按钮和二维码交互
const followBtn = document.querySelector('.follow-btn');
const qrPopup = document.querySelector('.qr-popup');

followBtn.addEventListener('mouseenter', () => {
    qrPopup.classList.add('show');
});

followBtn.addEventListener('mouseleave', () => {
    qrPopup.classList.remove('show');
});

// 点击其他地方关闭二维码
document.addEventListener('click', (e) => {
    if (!followBtn.contains(e.target)) {
        qrPopup.classList.remove('show');
    }
});

// 监听滚动事件
window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    
    // 当滚动到页面底部附近时显示 footer
    if (scrollPosition >= documentHeight - 100) {
        footer.classList.remove('hidden');
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
        footer.classList.add('hidden');
    }
});

// 分类功能
document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const navItems = document.querySelectorAll('.nav-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            // 筛选显示对应分类的网站
            navItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}); 