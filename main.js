const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.content__item');
const contentItems = $$('.content__item-wrap')

const itemActive = $('.content__item-active')
const cotentMenu = $('.content__menu')

items.forEach(function (item, index) {
    const contentItem = contentItems[index];


    item.onclick = function () {
        $('.content__item-active').classList.remove('content__item-active');
        this.classList.add('content__item-active');


        $('.content__item-wrap.active').classList.remove('active');
        contentItem.classList.add('active');
    }

})



const contentSlogan = $('.content__item-slogan');
const imgPath = $('.content__slogan-img img');
const namePerson = $('.content__slogan-text p');
const saying = $('.content__slogan-text span');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const selectionSlogan = $('.selection-slogan')

const main = {
    currentIndex: 0,
    slogans: [
        {
            img: "./assets/img/Henry_David_Thoreau.jpg",
            name: "Henry David Thoreau",
            slogan: "Những gì bạn có được sau khi đạt mục tiêu không quan trọng bằng bạn trở thành người thế nào sau khi đạt được điều đó"
        },
        {
            img: "./assets/img/Mark_Zuckerberg.jpg",
            name: "Mark Zuckerberg",
            slogan: "Di chuyển nhanh và phá vỡ các quy tắc. Nếu vẫn chưa phá vỡ cái gì thì chính tỏ bạn vẫn chưa đủ nhanh"
        },
        {
            img: "./assets/img/Bill_Gates.jpg",
            name: "Bill Gates",
            slogan: "Nếu bạn sinh ra trong nghèo khó đó không phải là lỗi của bạn. Nhưng nếu bạn chết trong nghèo khó thì đó là lỗi của bạn"
        },
        {
            img: "./assets/img/jackma.jpg",
            name: "Jack Ma",
            slogan: "Không có chuyện vừa làm ngày hôm nay, bạn đã thành công ngày mai. Hãy nhớ nếu kinh doanh hôm nay, bạn sẽ thành công sau 10 năm nữa",
        },
        {
            img: "./assets/img/warren-buffett.jpg",
            name: "Warren Buffett",
            slogan: "Khi một người được ngồi trong bóng mát ngày hôm nay thì đó là vì ai đó đã trồng 1 cái cây từ trước đó rất lâu"
        },
        {
            img: "./assets/img/abraham_lincoln.jpg",
            name: "Abraham Lincoln",
            slogan: "Nếu cho tôi 6 giờ để chặt một cái cây, tôi sẽ dành 4 tiếng để mài rìu"
        },
        {
            img: "./assets/img/edison.jpg",
            name: "Thomas Edison",
            slogan: "Thiên tài 1% là cảm hứng và 99% là mồ hôi"
        },
        {
            img: "./assets/img/Oprah_Winfrey.webp",
            name: "Oprah Winfrey",
            slogan: "Đừng đặt ra giới hạn cho chính mình",
        },
    ],

    defineProperties: function () {
        Object.defineProperty(this, 'currentSlogan', {
            get: function () {
                return this.slogans[this.currentIndex];
            }
        })
    },



    render: function () {
        const htmls = this.slogans.map((slogan, index) => {
            return `
                <span class="selection ${index === this.currentIndex ? 'selection-active' : ''}" data-index = "${index}"></span>
            `
        })
        selectionSlogan.innerHTML = htmls.join('');
    },
    loadCurrentSlogan: function () {
        imgPath.src = this.currentSlogan.img;
        namePerson.textContent = this.currentSlogan.name;
        saying.textContent = this.currentSlogan.slogan;
    },

    handleEvent: function () {
        _this = this;


        nextBtn.onclick = function () {
            _this.nextSlogan();
        }

        prevBtn.onclick = function () {
            _this.prevSlogan();
        }


        // Xử lí khi click vào chọn slogan
        selectionSlogan.onclick = function (e) {
            const sloganNode = e.target.closest('.selection:not(.selection-active)');
            if (sloganNode) {
                _this.currentIndex = Number(sloganNode.dataset.index);
                _this.loadCurrentSlogan();
                _this.render();
            }
        }
        // Tự động next slogan
        var interval = setInterval(function () {
            nextBtn.click();
        }, 4000)

    },

    nextSlogan: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.slogans.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSlogan();
        this.render();
    },

    prevSlogan: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.slogans.length - 1;
        }
        this.loadCurrentSlogan();
        this.render();
    },


    start: function () {
        this.defineProperties();

        this.loadCurrentSlogan();

        this.handleEvent();

        this.render();
    },
}
main.start();
