
window.onload = function () {
    var _0xd365x1;
};
$(document).ready(function (_0xd365x2) {
    var _0xd365x3 = -1,
        o = '',
        _0xd365x5 = '';
    _0xd365x2('#menu').find('ul').find('li').each(function () {
        for (var _0xd365x6 = _0xd365x2(this).text(), _0xd365x7 = _0xd365x2(this).find('a').attr('href'), _0xd365x8 = 0, _0xd365x9 = 0; _0xd365x9 < _0xd365x6.length && (_0xd365x8 = _0xd365x6.indexOf('_', _0xd365x8), -1 != _0xd365x8); _0xd365x9++) {
            _0xd365x8++
        };
        if (level = _0xd365x9, level > _0xd365x3 && (o += '<ul>', _0xd365x5 += '<ul>'), level < _0xd365x3) {
            offset = _0xd365x3 - level;
            for (var _0xd365x9 = 0; _0xd365x9 < offset; _0xd365x9++) {
                o += '</ul></li>', _0xd365x5 += '</ul></li>'
            }
        };
        _0xd365x6 = _0xd365x6.replace(/_/gi, ''), o += "<li><a href='" + _0xd365x7 + "'>" + _0xd365x6 + '</a>', _0xd365x5 += "<li><a href='" + _0xd365x7 + "'>";
        for (var _0xd365x9 = 0; _0xd365x9 < level; _0xd365x9++) {
            _0xd365x5 += ''
        };
        _0xd365x5 += _0xd365x6 + '</a>', _0xd365x3 = level
    });
    for (var _0xd365x8 = 0; _0xd365x3 >= _0xd365x8; _0xd365x8++) {
        o += '</ul>', _0xd365x5 += '</ul>', 0 != _0xd365x8 && (o += '</li>', _0xd365x5 += '</li>')
    };
    _0xd365x2('#menu .LinkList').html(_0xd365x5), _0xd365x2('#menu > .LinkList > ul').attr('id', 'nav1'), selectnav('nav1'), _0xd365x2('#menu ul > li > ul').parent('li').addClass('parent'), _0xd365x2('#menu .widget').attr('style', 'display:block!important;')
});
$(document).ready(function () {
    var _0xd365xa = $('.search');
    _0xd365xa.click(function (_0xd365x1) {
        _0xd365x1.preventDefault();
        if (_0xd365xa.is('.active') && $(_0xd365x1.target).is(_0xd365xa)) {
            _0xd365xa.removeClass('active')
        } else {
            _0xd365xa.addClass('active');
            _0xd365xa.find('input').focus()
        }
    });
    $('body').click(function (_0xd365x1) {
        if (_0xd365xa.is('.active') && !$(_0xd365x1.target).is('.search, .search form, .search input')) {
            _0xd365xa.removeClass('active')
        }
    });
    selectnav('nav')
});
$('.ticker .HTML .widget-content').each(function () {
    var _0xd365xb = $(this).find('span').attr('data-no') || '',
        _0xd365xc = $(this).find('span').attr('data-label') || '',
        _0xd365xd = $(this).find('span').attr('data-type') || '';
    if (_0xd365xd != undefined && _0xd365xd.match('recent')) {
        $.ajax({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xd365xb,
            type: 'get',
            dataType: 'jsonp',
            success: function (_0xd365x1) {
                var u = '';
                var _0xd365xf = '<ul>';
                for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                    for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                        if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                            u = _0xd365x1.feed.entry[aaw].link[aso].href;
                            break
                        }
                    };
                    var asf = _0xd365x1.feed.entry[aaw].title.$t;
                    var s = _0xd365x1.feed.entry[aaw].category[0].term;
                    var bax = _0xd365x1.feed.entry[aaw].content.$t;
                    var asp = $('<div>').html(bax);
                    if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                        var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                        var _0xd365x3 = _0xd365x5
                    } else {
                        if (bax.indexOf('<img') > -1) {
                            var aaq = asp.find('img:first').attr('src').replace('s72-c', 's1600');
                            var _0xd365x3 = aaq
                        } else {
                            var _0xd365x3 = no_image
                        }
                    };
                    _0xd365xf += '<li><div class="tk-thumb"><a class="tk-img" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + u + '">' + asf + '</a></h3></li>'
                };
                _0xd365xf += '</ul>';
                $('.ticker .widget-content').each(function () {
                    $(this).html(_0xd365xf);
                    $(this).prev('h2').prepend('<i class="fa fa-fire"></i>');
                    $(this).find('ul').webTicker()
                })
            }
        })
    } else {
        if (_0xd365xd.match('label')) {
            $.ajax({
                url: '/feeds/posts/default/-/' + _0xd365xc + '?alt=json-in-script&max-results=' + _0xd365xb,
                type: 'get',
                dataType: 'jsonp',
                success: function (_0xd365x1) {
                    var u = '';
                    var _0xd365xf = '<ul>';
                    for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                        for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                            if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                                u = _0xd365x1.feed.entry[aaw].link[aso].href;
                                break
                            }
                        };
                        var asf = _0xd365x1.feed.entry[aaw].title.$t;
                        var s = _0xd365x1.feed.entry[aaw].category[0].term;
                        var bax = _0xd365x1.feed.entry[aaw].content.$t;
                        var asp = $('<div>').html(bax);
                        if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                            var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                            var _0xd365x3 = _0xd365x5
                        } else {
                            if (bax.indexOf('<img') > -1) {
                                var aaq = asp.find('img:first').attr('src').replace('s72-c', 's1600');
                                var _0xd365x3 = aaq
                            } else {
                                var _0xd365x3 = no_image
                            }
                        };
                        _0xd365xf += '<li><div class="tk-thumb"><a class="tk-img" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + u + '">' + asf + '</a></h3></li>'
                    };
                    _0xd365xf += '</ul>';
                    $('.ticker .HTML .widget-content').each(function () {
                        $(this).html(_0xd365xf);
                        $(this).prev('h2').prepend('<i class="fa fa-fire"></i>');
                        $(this).find('ul').webTicker()
                    })
                }
            })
        } else {
            $('.news-tick-bar').remove()
        }
    }
});
$('.ty-slide-show .HTML .widget-content').each(function () {
    var aat = $(this).prev('h2').text(),
        _0xd365xc = $(this).find('span').attr('data-label'),
        _0xd365xb = $(this).find('span').attr('data-no'),
        _0xd365x18 = $(this).parent().attr('id'),
        _0xd365xd = $(this).find('span').attr('data-type');
    if (_0xd365xd != undefined && _0xd365xd.match('ty-latest-slide')) {
        $.ajax({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xd365xb,
            type: 'get',
            dataType: 'jsonp',
            success: function (_0xd365x1) {
                var u = '';
                var _0xd365xf = '<div class="ty-slide"><ul class="slides owl-carousel">';
                for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                    for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                        if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                            u = _0xd365x1.feed.entry[aaw].link[aso].href;
                            break
                        }
                    };
                    var _0xd365x19;
                    for (var _0xd365x3 = 0; _0xd365x3 < _0xd365x1.feed.entry[aaw].link.length; _0xd365x3++) {
                        if ((_0xd365x1.feed.entry[aaw].link[_0xd365x3].rel === 'replies') && (_0xd365x1.feed.entry[aaw].link[_0xd365x3].type === 'text/html')) {
                            _0xd365x19 = _0xd365x1.feed.entry[aaw].link[_0xd365x3].title;
                            break
                        }
                    };
                    _0xd365x19 = parseInt(_0xd365x19, 10);
                    if ('content' in _0xd365x1.feed.entry[aaw]) {
                        var _0xd365x1a = _0xd365x1.feed.entry[aaw].content.$t
                    } else {
                        if ('summary' in b_rc) {
                            var _0xd365x1a = _0xd365x1.feed.entry[aaw].summary.$t
                        } else {
                            var _0xd365x1a = ''
                        }
                    };
                    var _0xd365x1b = /<\S[^>]*>/g;
                    _0xd365x1a = _0xd365x1a.replace(_0xd365x1b, ''), _0xd365x1a.length > 120 && (_0xd365x1a = '' + _0xd365x1a.substring(0, 100) + '...');
                    var asf = _0xd365x1.feed.entry[aaw].title.$t;
                    var s = _0xd365x1.feed.entry[aaw].category[0].term;
                    var bac = _0xd365x1.feed.entry[aaw].author[0].name.$t;
                    var _0xd365x1d = _0xd365x1.feed.entry[aaw].author[0].gd$image.src;
                    var baq = _0xd365x1.feed.entry[aaw].published.$t,
                        aav = baq.substring(0, 4),
                        _0xd365x20 = baq.substring(5, 7),
                        asg = baq.substring(8, 10),
                        asd = month_format[parseInt(_0xd365x20, 10)] + ' ' + asg + ', ' + aav;
                    var bax = _0xd365x1.feed.entry[aaw].content.$t;
                    var asp = $('<div>').html(bax);
                    if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                        var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url;
                        var _0xd365x3 = _0xd365x5
                    } else {
                        if (bax.indexOf('<img') > -1) {
                            var aaq = asp.find('img:first').attr('src');
                            var _0xd365x3 = aaq
                        } else {
                            var _0xd365x3 = no_image
                        }
                    };
                    _0xd365xf += '<li><div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '"><img alt="' + asf + '" src="' + _0xd365x3 + '"/><span class="tyimg-lay"/></a><div class="ty-slide-con"><div class="ty-slide-con"><div class="ty-slide-con-tab"><h3 class="ty-bonos-entry"><a href="' + u + '">' + asf + '</a></h3><span class="recent-date">' + asd + '</span><p class="recent-summary">' + _0xd365x1a + '</p><a class="tyslide-more" href="' + u + '">Read More</a></div></div></div></div></li>'
                };
                _0xd365xf += '</ul></div>';
                $('.ty-slide-show .HTML .widget-content').each(function () {
                    var _0xd365x6 = $(this).parent().attr('id');
                    if (_0xd365x6 == _0xd365x18) {
                        $(this).html(_0xd365xf);
                        $(this).parent().addClass('tslide');
                        $(this).parent().addClass('templatesyard');
                        $(this).prev('h2').remove();
                        $(this).find('.yard-img,.ty-img').each(function () {
                            $(this).attr('style', function (aaw, aau) {
                                return aau.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (aaw, aau) {
                                return aau.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    } else {
        if (_0xd365xd != undefined && _0xd365xd.match('ty-tag-slide')) {
            $.ajax({
                url: '/feeds/posts/default/-/' + _0xd365xc + '?alt=json-in-script&max-results=' + _0xd365xb,
                type: 'get',
                dataType: 'jsonp',
                success: function (_0xd365x1) {
                    var u = '';
                    var _0xd365xf = '<div class="ty-slide"><ul class="slides owl-carousel">';
                    for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                        for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                            if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                                u = _0xd365x1.feed.entry[aaw].link[aso].href;
                                break
                            }
                        };
                        var _0xd365x19;
                        for (var _0xd365x3 = 0; _0xd365x3 < _0xd365x1.feed.entry[aaw].link.length; _0xd365x3++) {
                            if ((_0xd365x1.feed.entry[aaw].link[_0xd365x3].rel === 'replies') && (_0xd365x1.feed.entry[aaw].link[_0xd365x3].type === 'text/html')) {
                                _0xd365x19 = _0xd365x1.feed.entry[aaw].link[_0xd365x3].title;
                                break
                            }
                        };
                        _0xd365x19 = parseInt(_0xd365x19, 10);
                        if ('content' in _0xd365x1.feed.entry[aaw]) {
                            var _0xd365x1a = _0xd365x1.feed.entry[aaw].content.$t
                        } else {
                            if ('summary' in b_rc) {
                                var _0xd365x1a = _0xd365x1.feed.entry[aaw].summary.$t
                            } else {
                                var _0xd365x1a = ''
                            }
                        };
                        var _0xd365x1b = /<\S[^>]*>/g;
                        _0xd365x1a = _0xd365x1a.replace(_0xd365x1b, ''), _0xd365x1a.length > 120 && (_0xd365x1a = '' + _0xd365x1a.substring(0, 100) + '...');
                        var asf = _0xd365x1.feed.entry[aaw].title.$t;
                        var s = _0xd365x1.feed.entry[aaw].category[0].term;
                        var bac = _0xd365x1.feed.entry[aaw].author[0].name.$t;
                        var _0xd365x1d = _0xd365x1.feed.entry[aaw].author[0].gd$image.src;
                        var baq = _0xd365x1.feed.entry[aaw].published.$t,
                            aav = baq.substring(0, 4),
                            _0xd365x20 = baq.substring(5, 7),
                            asg = baq.substring(8, 10),
                            asd = month_format[parseInt(_0xd365x20, 10)] + ' ' + asg + ', ' + aav;
                        var bax = _0xd365x1.feed.entry[aaw].content.$t;
                        var asp = $('<div>').html(bax);
                        if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                            var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url;
                            var _0xd365x3 = _0xd365x5
                        } else {
                            if (bax.indexOf('<img') > -1) {
                                var aaq = asp.find('img:first').attr('src');
                                var _0xd365x3 = aaq
                            } else {
                                var _0xd365x3 = no_image
                            }
                        };
                        _0xd365xf += '<li><div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '"><img alt="' + asf + '" src="' + _0xd365x3 + '"/><span class="tyimg-lay"/></a><div class="ty-slide-con"><div class="ty-slide-con"><div class="ty-slide-con-tab"><h3 class="ty-bonos-entry"><a href="' + u + '">' + asf + '</a></h3><span class="recent-date">' + asd + '</span><p class="recent-summary">' + _0xd365x1a + '</p><a class="tyslide-more" href="' + u + '">إقرأ المزيد </a></div></div></div></div></li>'
                    };
                    _0xd365xf += '</ul></div>';
                    $('.ty-slide-show .HTML .widget-content').each(function () {
                        var _0xd365x6 = $(this).parent().attr('id');
                        if (_0xd365x6 == _0xd365x18) {
                            $(this).html(_0xd365xf);
                            $(this).parent().addClass('tslide');
                            $(this).parent().addClass('templatesyard');
                            $(this).prev('h2').remove();
                            $(this).find('.yard-img,.ty-img').each(function () {
                                $(this).attr('style', function (aaw, aau) {
                                    return aau.replace('/default.jpg', '/mqdefault.jpg')
                                }).attr('style', function (aaw, aau) {
                                    return aau.replace('s72-c', 's1600')
                                })
                            })
                        }
                    })
                }
            })
        } else {
            $('.feat-slider-wrap').remove()
        }
    }
});
$('.featured .HTML .widget-content').each(function () {
    var _0xd365xc = $(this).find('span').attr('data-label'),
        _0xd365xb = $(this).find('span').attr('data-no'),
        aat = $(this).prev('h2').text(),
        aar = $(this).parent().attr('id'),
        _0xd365xd = $(this).find('span').attr('data-type');
    if (_0xd365xd.match('tyard')) {
        $.ajax({
            url: '/feeds/posts/default/-/' + _0xd365xc + '?alt=json-in-script&max-results=3',
            type: 'get',
            dataType: 'jsonp',
            success: function (_0xd365x1) {
                var u = '';
                var _0xd365xf = '<div class="ty-feat">';
                for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                    for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                        if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                            u = _0xd365x1.feed.entry[aaw].link[aso].href;
                            break
                        }
                    };
                    if ('content' in _0xd365x1.feed.entry[aaw]) {
                        var _0xd365x1a = _0xd365x1.feed.entry[aaw].content.$t
                    } else {
                        if ('summary' in b_rc) {
                            var _0xd365x1a = _0xd365x1.feed.entry[aaw].summary.$t
                        } else {
                            var _0xd365x1a = ''
                        }
                    };
                    var _0xd365x1b = /<\S[^>]*>/g;
                    _0xd365x1a = _0xd365x1a.replace(_0xd365x1b, ''), _0xd365x1a.length > 120 && (_0xd365x1a = '' + _0xd365x1a.substring(0, 100) + '...');
                    var asf = _0xd365x1.feed.entry[aaw].title.$t;
                    var s = _0xd365x1.feed.entry[aaw].category[0].term;
                    var bac = _0xd365x1.feed.entry[aaw].author[0].name.$t;
                    var baq = _0xd365x1.feed.entry[aaw].published.$t,
                        aav = baq.substring(0, 4),
                        _0xd365x20 = baq.substring(5, 7),
                        asg = baq.substring(8, 10),
                        asd = month_format[parseInt(_0xd365x20, 10)] + ' ' + asg + ', ' + aav;
                    var bax = _0xd365x1.feed.entry[aaw].content.$t;
                    var asp = $('<div>').html(bax);
                    if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                        var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url;
                        var _0xd365x3 = _0xd365x5
                    } else {
                        if (bax.indexOf('<img') > -1) {
                            var aaq = asp.find('img:first').attr('src');
                            var _0xd365x3 = aaq
                        } else {
                            var _0xd365x3 = no_image
                        }
                    };
                    if (aaw == 0) {
                        _0xd365xf += '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' + s + '" href="/search/label/' + s + '">' + s + '</a></div></div><div class="ty-con-yard"><h3 class="tyard-title"><a href="' + u + '">' + asf + '</a></h3><span class="yard-auth-ty">' + bac + '</span><span class="ty-time">' + asd + '</span></div></div></div>'
                    } else {
                        _0xd365xf += '<div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' + u + '">' + asf + '</a></h3><span class="ty-time">' + asd + '</span></div><div class="clear"/></div>'
                    }
                };
                _0xd365xf += '</div>';
                $('.featured .HTML .widget-content').each(function () {
                    var _0xd365x6 = $(this).parent().attr('id');
                    if (_0xd365x6 == aar) {
                        $(this).html(_0xd365xf);
                        $(this).parent().addClass('tyard');
                        $(this).parent().addClass('templatesyard');
                        $('.featured').addClass('comload').removeClass('preload');
                        $(this).find('.yard-img,.ty-img').each(function () {
                            $(this).attr('style', function (aaw, aau) {
                                return aau.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (aaw, aau) {
                                return aau.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
});
$('.post-home-image .post-thumb a').attr('style', function (_0xd365x25, aav) {
    if (aav.match('hqdefault.jpg')) {
        return aav.replace('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (aav.match('default.jpg')) {
            return aav.replace('/default.jpg', '/mqdefault.jpg')
        } else {
            if (aav.match('s72-c')) {
                return aav.replace('/s72-c', '/s1600')
            } else {
                if (aav.match('w72-h72-p-nu')) {
                    return aav.replace('/w72-h72-p-nu', '/s1600')
                } else {
                    if (aav.match(/s\B\d{2,4}/)) {
                        return aav.replace(/s\B\d{2,4}/, 's' + 1600)
                    } else {
                        return aav.replace('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png', no_image)
                    }
                }
            }
        }
    }
});
$(document).ready(function () {
    var aat = $('#sidetabs #tabside1 .widget h2').text();
    $('.menu-tab .item-1 a').text(aat);
    var u = $('#sidetabs #tabside2 .widget h2').text();
    $('.menu-tab .item-2 a').text(u);
    var _0xd365xc = $('#sidetabs #tabside3 .widget h2').text();
    $('.menu-tab .item-3 a').text(_0xd365xc);
    $('#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title').remove();
    $(this).find('.menu-tab li').addClass('hide-tab');
    $('.sidetabs').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if (0 === $('.sidetabs .widget').length) {
        $('.sidetabs').remove()
    }
});
$(document).ready(function () {
    $('.cmm-tabs').simplyTab({
        active: 1,
        fx: 'fade',
        showSpeed: 400,
        hideSpeed: 400
    });
    $('.blogger-tab').append($('#comments'));
    $('.cmm-tabs.simplyTab .wrap-tab').wrap("<div class='cmm-tabs-header'/>")
});
$('.PopularPosts ul li img').attr('src', function (_0xd365x25, _0xd365x26) {
    if (_0xd365x26.match('hqdefault.jpg')) {
        return _0xd365x26.replace('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xd365x26.match('default.jpg')) {
            return _0xd365x26.replace('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xd365x26.match('s72-c')) {
                return _0xd365x26.replace('/s72-c', '/s1600')
            } else {
                if (_0xd365x26.match('w72-h72-p-nu')) {
                    return _0xd365x26.replace('/w72-h72-p-nu', '/s1600')
                } else {
                    if (t.match(/s\B\d{2,4}/)) {
                        return t.replace(/s\B\d{2,4}/, 's' + 1600)
                    } else {
                        return _0xd365x26.replace('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png', no_image)
                    }
                }
            }
        }
    }
});
$(document).ready(function () {
    $('span[name="author-social"]').before($('.post-author-social .widget-content').html());
    $('.post-author-social .widget-content').html('');
    $('span[name="author-post"]').before($('.post-author-widget .widget-content').html());
    $('.post-author-widget .widget-content').html('');
    $('a[name="ad-post-top"]').before($('#adwidegt2 .widget-content').html());
    $('#adwidegt2 .widget-content').html('');
    $('a[name="ad-post-bottom"]').before($('#adwidegt3 .widget-content').html());
    $('#adwidegt3 .widget-content').html('')
});
$('.ty-trigger .HTML .widget-content span.latestcomments').each(function () {
    var _0xd365xb = $(this).attr('data-no');
    $.ajax({
        url: '/feeds/comments/default?alt=json-in-script&max-results=' + _0xd365xb,
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xd365x1) {
            var u = '';
            var _0xd365xf = '<div class="tyard-komet">';
            for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                if (aaw == _0xd365x1.feed.entry.length) {
                    break
                };
                for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                    if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                        u = _0xd365x1.feed.entry[aaw].link[aso].href;
                        break
                    }
                };
                if ('content' in _0xd365x1.feed.entry[aaw]) {
                    var bax = _0xd365x1.feed.entry[aaw].content.$t
                } else {
                    if ('summary' in b_rc) {
                        var bax = _0xd365x1.feed.entry[aaw].summary.$t
                    } else {
                        var bax = ''
                    }
                };
                var _0xd365x27 = /<\S[^>]*>/g;
                bax = bax.replace(_0xd365x27, '');
                if (bax.length > 70) {
                    bax = '' + bax.substring(0, 50) + '...'
                };
                var bac = _0xd365x1.feed.entry[aaw].author[0].name.$t;
                var _0xd365x28 = _0xd365x1.feed.entry[aaw].author[0].gd$image.src;
                if (_0xd365x28.match('http://img1.blogblog.com/img/blank.gif')) {
                    var _0xd365x3 = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (_0xd365x28.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var _0xd365x3 = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var _0xd365x3 = _0xd365x28
                    }
                };
                _0xd365xf += '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' + _0xd365x3 + '"/></div><a href="' + u + '">' + bac + '</a><span>"' + bax + '"</span></div>'
            };
            _0xd365xf += '</div><div class="clear"/>';
            $('.ty-trigger .HTML .widget-content span.latestcomments').each(function () {
                var _0xd365x6 = $(this).attr('data-no');
                if (_0xd365x6 == _0xd365xb) {
                    $(this).parent().html(_0xd365xf)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.latestposts').each(function () {
    var _0xd365xb = $(this).attr('data-no');
    $.ajax({
        url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0xd365xb,
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xd365x1) {
            var u = '';
            var _0xd365xf = '<div class="ty-bonus">';
            for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                    if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                        u = _0xd365x1.feed.entry[aaw].link[aso].href;
                        break
                    }
                };
                var asf = _0xd365x1.feed.entry[aaw].title.$t;
                var s = _0xd365x1.feed.entry[aaw].category[0].term;
                var bac = _0xd365x1.feed.entry[aaw].author[0].name.$t;
                var baq = _0xd365x1.feed.entry[aaw].published.$t,
                    aav = baq.substring(0, 4),
                    _0xd365x20 = baq.substring(5, 7),
                    asg = baq.substring(8, 10),
                    asd = month_format[parseInt(_0xd365x20, 10)] + ' ' + asg + ', ' + aav;
                var bax = _0xd365x1.feed.entry[aaw].content.$t;
                var asp = $('<div>').html(bax);
                if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                    var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var _0xd365x3 = _0xd365x5
                } else {
                    if (bax.indexOf('<img') > -1) {
                        var aaq = asp.find('img:first').attr('src').replace('s72-c', 's1600');
                        var _0xd365x3 = aaq
                    } else {
                        var _0xd365x3 = no_image
                    }
                };
                _0xd365xf += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + u + '">' + asf + '</a></h3><span class="yard-auth-ty">' + bac + '</span><span class="ty-time">' + asd + '</span></div></div>'
            };
            _0xd365xf += '</div>';
            $('.ty-trigger .HTML .widget-content span.latestposts').each(function () {
                var _0xd365x6 = $(this).attr('data-no');
                if (_0xd365x6 == _0xd365xb) {
                    $(this).parent().html(_0xd365xf)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.tagpost').each(function () {
    var _0xd365xc = $(this).attr('data-label'),
        _0xd365xb = $(this).attr('data-no');
    $.ajax({
        url: '/feeds/posts/default/-/' + _0xd365xc + '?alt=json-in-script&max-results=' + _0xd365xb,
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xd365x1) {
            var u = '';
            var _0xd365xf = '<div class="ty-bonus">';
            for (var aaw = 0; aaw < _0xd365x1.feed.entry.length; aaw++) {
                for (var aso = 0; aso < _0xd365x1.feed.entry[aaw].link.length; aso++) {
                    if (_0xd365x1.feed.entry[aaw].link[aso].rel == 'alternate') {
                        u = _0xd365x1.feed.entry[aaw].link[aso].href;
                        break
                    }
                };
                var asf = _0xd365x1.feed.entry[aaw].title.$t;
                var s = _0xd365x1.feed.entry[aaw].category[0].term;
                var bac = _0xd365x1.feed.entry[aaw].author[0].name.$t;
                var baq = _0xd365x1.feed.entry[aaw].published.$t,
                    aav = baq.substring(0, 4),
                    _0xd365x20 = baq.substring(5, 7),
                    asg = baq.substring(8, 10),
                    asd = month_format[parseInt(_0xd365x20, 10)] + ' ' + asg + ', ' + aav;
                var bax = _0xd365x1.feed.entry[aaw].content.$t;
                var asp = $('<div>').html(bax);
                if (bax.indexOf('//www.youtube.com/embed/') > -1) {
                    var _0xd365x5 = _0xd365x1.feed.entry[aaw].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var _0xd365x3 = _0xd365x5
                } else {
                    if (bax.indexOf('<img') > -1) {
                        var aaq = asp.find('img:first').attr('src').replace('s72-c', 's1600');
                        var _0xd365x3 = aaq
                    } else {
                        var _0xd365x3 = no_image
                    }
                };
                _0xd365xf += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + u + '">' + asf + '</a></h3><span class="yard-auth-ty">' + bac + '</span><span class="ty-time">' + asd + '</span></div></div>'
            };
            _0xd365xf += '</div>';
            $('.ty-trigger .HTML .widget-content span.tagpost').each(function () {
                var _0xd365x6 = $(this).attr('data-label');
                if (_0xd365x6 == _0xd365xc) {
                    $(this).parent().html(_0xd365xf)
                }
            })
        }
    })
});
$(document).ready(function () {
    $('span[name="author-social"]').before($('.post-author-social .widget-content').html());
    $('.post-author-social .widget-content').html('');
    $('span[name="author-post"]').before($('.post-author-widget .widget-content').html());
    $('.post-author-widget .widget-content').html('')
});
$('.ty-comment').click(function () {
    $('html, body').animate({
        scrollTop: $('#put-your-comment').offset().top
    }, 1000)
});
$(document).ready(function () {
    function _0xd365x29(asf, _0xd365x1, asd) {
        $.ajax({
            url: '/feeds/posts/default/-/' + _0xd365x1 + '?alt=json-in-script&max-results=' + asd,
            type: 'get',
            dataType: 'jsonp',
            success: function (aav) {
                for (var u = '', _0xd365xf = '<div class="related">', _0xd365x8 = 0; _0xd365x8 < aav.feed.entry.length; _0xd365x8++) {
                    for (var _0xd365x9 = 0; _0xd365x9 < aav.feed.entry[_0xd365x8].link.length; _0xd365x9++) {
                        if ('alternate' == aav.feed.entry[_0xd365x8].link[_0xd365x9].rel) {
                            u = aav.feed.entry[_0xd365x8].link[_0xd365x9].href;
                            break
                        }
                    };
                    var _0xd365x5 = aav.feed.entry[_0xd365x8].title.$t;
                    var bax = aav.feed.entry[_0xd365x8].content.$t;
                    var bac = $('<div>').html(bax);
                    if (bax.indexOf('http://www.youtube.com/embed/') > -1 || bax.indexOf('https://www.youtube.com/embed/') > -1) {
                        var baq = aav.feed.entry[_0xd365x8].media$thumbnail.url,
                            _0xd365x2a = baq.replace('/default.jpg', '/mqdefault.jpg'),
                            _0xd365x3 = _0xd365x2a
                    } else {
                        if (bax.indexOf('<img') > -1) {
                            var s = bac.find('img:first').attr('src'),
                                _0xd365xc = s.replace('s72-c', 's600');
                            var _0xd365x3 = _0xd365xc
                        } else {
                            var _0xd365x3 = 'http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png'
                        }
                    };
                    _0xd365xf += '<li><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + _0xd365x3 + ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' + u + '">' + _0xd365x5 + '</a></h3></li>'
                };
                _0xd365xf += '</div>', asf.html(_0xd365xf)
            }
        })
    }
    $('#related-posts').each(function () {
        var asf = $(this),
            _0xd365x1 = asf.text(),
            asd = 3;
        _0xd365x29(asf, _0xd365x1, asd)
    })
});
$('.Label a').attr('href', function (_0xd365x25, _0xd365x2b) {
    return _0xd365x2b.replace(_0xd365x2b, _0xd365x2b + '?&max-results=' + perPage)
});
$('.item .post-body img').parent('a').css('margin', '0 auto!important');
var s = '[full_width]';
var o = '[left_sidebar]';
var u = '[right_sidebar]';
$('.post *').replaceText(s, '<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>');
$('.post-body *').replaceText(o, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>');
$('.post-body *').replaceText(u, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:left!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:right!important;padding-left:0!important;}}</style>')
