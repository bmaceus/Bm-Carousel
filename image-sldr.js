$(document).ready(function () {
    if ($(".bm-gal-slider").length > 0) {
        $(".bm-gal-slider .bm-gal-ctnr").prepend("<div class='bm-ui-loading'><span></span></div>");
        var startIn, slideMove, getProperties, bm_data_delay = 0
            , bm_data_ease_in = 1000
            , bm_data_ease_out = 1000
            , bm_data_in = "fade"
            , bm_data_out = "fade"
            , bm_data_top = 0
            , bm_data_left = 0
            , bm_data_bck_clr = 'transparent'
            , bm_data_prnt = ''
            , startInvlTmr = 5000
            , enableNavClick = "";
        $(".bm-gal-slider").each(function () {
            var _this = $(this);
            var _thisslde = $(_this).find(".bm-slide");
            var bullnav = "";
            $(_thisslde).each(function () {
                bullnav += "<span></span>";
            });
            if ($(_thisslde).length > 1) {
                $(_this).append("<div class='bm-nav' id='prev'><div><img src='images/sldr-arrow-left.png' /></div></div><div class='bm-nav' id='next'><div><img src='images/sldr-arrow-right.png' /></div></div><div class='bm-sldcnt'>" + bullnav + "</div>");
            }
            var _thisarNav = $(_this).find(".bm-nav");
            var _thisnavbubbl = $(this).find(".bm-sldcnt span");
            $(_thisslde).eq(0).css('display', 'block');
            $(_thisnavbubbl).eq(0).addClass("current-slide");
            var maxL = $(_thisslde).length - 1;
            var galSldrCrIdx = 0;
            var galSldrCrIdxNXT = 0;
            var startIn;
            if (typeof _this.attr("bm-slider-timer") !== typeof undefined && _this.attr("bm-slider-timer") !== false) {
                startInvlTmr = parseInt(_this.attr("bm-slider-timer"));
            }
            getProperties = function (assetP) {
                if (typeof assetP.attr("bm-data-delay") !== typeof undefined && assetP.attr("bm-data-delay") !== false) {
                    bm_data_delay = parseInt(assetP.attr("bm-data-delay"));
                }
                if (typeof assetP.attr("bm-data-ease-in") !== typeof undefined && assetP.attr("bm-data-ease-in") !== false) {
                    bm_data_ease_in = parseInt(assetP.attr("bm-data-ease-in"));
                }
                if (typeof assetP.attr("bm-data-ease-out") !== typeof undefined && assetP.attr("bm-data-ease-out") !== false) {
                    bm_data_ease_out = parseInt(assetP.attr("bm-data-ease-out"));
                }
                if (typeof assetP.attr("bm-data-in") !== typeof undefined && assetP.attr("bm-data-in") !== false) {
                    bm_data_in = assetP.attr("bm-data-in");
                }
                if (typeof assetP.attr("bm-data-out") !== typeof undefined && assetP.attr("bm-data-out") !== false) {
                    bm_data_out = assetP.attr("bm-data-out");
                }
                if (typeof assetP.attr("bm-data-top") !== typeof undefined && assetP.attr("bm-data-top") !== false) {
                    bm_data_top = parseInt(assetP.attr("bm-data-top"));
                }
                if (typeof assetP.attr("bm-data-left") !== typeof undefined && assetP.attr("bm-data-left") !== false) {
                    bm_data_left = parseInt(assetP.attr("bm-data-left"));
                }
                if (typeof $(_thisslde).attr("bm-data-bck-clr") !== typeof undefined && $(_thisslde).attr("bm-data-bck-clr") !== false) {
                    bm_data_bck_clr = assetP.attr("bm-data-bck-clr");
                }
            }
            slideMove = function (galSldrCrIdx, galSldrCrIdxNXT) {
                $(_thisslde).find(":animated").promise().done(function () {
                    $(_thisslde).find(":animated").clearQueue();
                    getProperties($(_thisslde).eq(galSldrCrIdxNXT));
                    if (typeof $(_thisslde).closest(".bm-gal-slider").attr("bm-data-prnt-id") !== typeof undefined && $(_thisslde).closest(".bm-gal-slider").attr("bm-data-prnt-id") !== false) {
                        bm_data_prnt_id = $(_thisslde).closest(".bm-gal-slider").attr("bm-data-prnt-id");
                        bm_data_prnt = $(_thisslde).closest("#" + bm_data_prnt_id);
                        $(bm_data_prnt).animate({
                            backgroundColor: bm_data_bck_clr
                        }, bm_data_ease_out);
                    }
                    else {
                        $(_thisslde).eq(galSldrCrIdxNXT).animate({
                            backgroundColor: bm_data_bck_clr
                        }, bm_data_ease_out);
                    }
                    $(_thisslde).eq(galSldrCrIdxNXT).find("> *").each(function () {
                        var this_assetP = $(this);
                        getProperties(this_assetP);
                        /* ======================== Slider Out ======================== */
                        /*   Fade Effect*/
                        if (bm_data_out == "fade") {
                            $(this_assetP).animate({
                                opacity: 0
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "fadeLeft") {
                            $(this_assetP).animate({
                                left: "-102%"
                                , opacity: 0
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "fadeRight") {
                            $(this_assetP).animate({
                                left: "102%"
                                , opacity: 0
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "fadeUp") {
                            $(this_assetP).animate({
                                top: "-102%"
                                , opacity: 0
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "fadeBottom") {
                            $(this_assetP).animate({
                                top: "102%"
                                , opacity: 0
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        /* Slide Effect*/
                        if (bm_data_out == "slideLeft") {
                            $(this_assetP).animate({
                                left: "-102%"
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "slideRight") {
                            $(this_assetP).animate({
                                left: "102%"
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "slideUp") {
                            $(this_assetP).animate({
                                top: "-102%"
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                        if (bm_data_out == "slideBottom") {
                            $(this_assetP).animate({
                                top: "102%"
                            }, bm_data_ease_out, function () {
                                $(this_assetP).css({
                                    top: ""
                                    , left: ""
                                });
                            });
                        }
                    });
                }, function () {
                    $(_thisslde).eq(galSldrCrIdxNXT).find(":animated").promise().done(function () {
                        $(_thisslde).find(":animated").clearQueue();
                        $(_thisslde).eq((galSldrCrIdxNXT)).css("display", "none");
                        getProperties($(_thisslde).eq(galSldrCrIdx));
                        if (typeof $(_thisslde).closest(".bm-gal-slider").attr("bm-data-prnt-id") !== typeof undefined && $(_thisslde).closest(".bm-gal-slider").attr("bm-data-prnt-id") !== false) {
                            bm_data_prnt_id = $(_thisslde).closest(".bm-gal-slider").attr("bm-data-prnt-id");
                            bm_data_prnt = $(_thisslde).closest("#" + bm_data_prnt_id);
                            $(bm_data_prnt).animate({
                                backgroundColor: bm_data_bck_clr
                            }, bm_data_ease_out);
                        }
                        else {
                            $(_thisslde).eq(galSldrCrIdx).animate({
                                backgroundColor: bm_data_bck_clr
                            }, bm_data_ease_out);
                        }
                        $(_thisslde).eq(galSldrCrIdx).find("> *").each(function () {
                            var this_asset = $(this);
                            /* ========================Slider In ======================== */
                            $(_thisslde).eq(galSldrCrIdxNXT).find(":animated").promise().done(function () {
                                $(_thisslde).eq(galSldrCrIdxNXT).promise().done(function () {
                                    getProperties(this_asset);
                                    $(_thisslde).eq(galSldrCrIdx).css("display", "block"); /* Fade Effect*/
                                    if (bm_data_in == "fade") {
                                        $(this_asset).css("display", "").css({
                                            top: bm_data_top
                                            , left: bm_data_left
                                            , opacity: 0
                                        }).delay(bm_data_delay).animate({
                                            opacity: 1
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "fadeLeft") {
                                        $(this_asset).css("display", "").css({
                                            top: bm_data_top
                                            , left: "102%"
                                            , opacity: 0
                                        }).delay(bm_data_delay).animate({
                                            left: bm_data_left
                                            , opacity: 1
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "fadeRight") {
                                        $(this_asset).css("display", "").css({
                                            top: bm_data_top
                                            , left: "-102%"
                                            , opacity: 0
                                        }).delay(bm_data_delay).animate({
                                            left: bm_data_left
                                            , opacity: 1
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "fadeUp") {
                                        $(this_asset).css("display", "").css({
                                            top: "-102%"
                                            , left: bm_data_left
                                            , opacity: 0
                                        }).delay(bm_data_delay).animate({
                                            top: bm_data_top
                                            , opacity: 1
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "fadeBottom") {
                                        $(this_asset).css("display", "").css({
                                            top: "102%"
                                            , left: bm_data_left
                                            , opacity: 0
                                        }).delay(bm_data_delay).animate({
                                            top: bm_data_top
                                            , opacity: 1
                                        }, bm_data_ease_in);
                                    } /* Slide Effect*/
                                    if (bm_data_in == "slideLeft") {
                                        $(this_asset).css("display", "").css({
                                            top: bm_data_top
                                            , left: "102%"
                                            , opacity: 1
                                        }).delay(bm_data_delay).animate({
                                            left: bm_data_left
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "slideRight") {
                                        $(this_asset).css("display", "").css({
                                            top: bm_data_top
                                            , left: "-102%"
                                            , opacity: 1
                                        }).delay(bm_data_delay).animate({
                                            left: bm_data_left
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "slideUp") {
                                        $(this_asset).css("display", "").css({
                                            top: "-102%"
                                            , top: bm_data_top
                                            , opacity: 1
                                        }).delay(bm_data_delay).animate({
                                            top: bm_data_top
                                        }, bm_data_ease_in);
                                    }
                                    if (bm_data_in == "slideBottom") {
                                        $(this_asset).css("display", "").css({
                                            top: "102%"
                                            , top: bm_data_top
                                            , opacity: 1
                                        }).delay(bm_data_delay).animate({
                                            top: bm_data_top
                                        }, bm_data_ease_in);
                                    }
                                    $(_thisslde).eq(galSldrCrIdx).find(":animated").promise().done(function () {
                                        $(_thisslde).eq(galSldrCrIdx).promise().done(function () {
                                            $(_thisnavbubbl).removeClass("current-slide");
                                            $(_thisnavbubbl).eq(galSldrCrIdx).addClass("current-slide");
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            };
            enableNavClick = function () {
                $(_thisslde).eq(galSldrCrIdxNXT).find(":animated").promise().done(function () {
                    $(_thisslde).eq(galSldrCrIdxNXT).promise().done(function () {
                        $(_thisarNav).click(function () {
                            if ($(this).attr("id") == "prev") {
                                if (galSldrCrIdx == 0) {
                                    galSldrCrIdxNXT = galSldrCrIdx;
                                    galSldrCrIdx = maxL;
                                }
                                else {
                                    galSldrCrIdxNXT = galSldrCrIdx;
                                    galSldrCrIdx--;
                                }
                                slideMove(galSldrCrIdx, galSldrCrIdxNXT);
                            }
                            else if ($(this).attr("id") == "next") {
                                if (galSldrCrIdx == maxL) {
                                    galSldrCrIdxNXT = galSldrCrIdx;
                                    galSldrCrIdx = 0;
                                }
                                else {
                                    galSldrCrIdxNXT = galSldrCrIdx;
                                    galSldrCrIdx++;
                                }
                                slideMove(galSldrCrIdx, galSldrCrIdxNXT);
                            }
                            $(_thisarNav).unbind('click');
                            var setTimeoutS = 500;
                            if (bm_data_ease_out > 1000) {
                                setTimeoutS = 500;
                            }
                            setTimeout(enableNavClick, setTimeoutS);
                        });
                    });
                });
            }
            var setNameTO = "startTmeO_" + $(_this).prevAll(".bm-gal-slider").length;
            var setNameFT = "AutStrt_" + $(_this).prevAll(".bm-gal-slider").length;
            window[setNameFT] = function () {
                if ($(_thisslde).length > 1) {
                    $(_thisslde).eq(galSldrCrIdxNXT).find(":animated").promise().done(function () {
                        $(_thisslde).eq(galSldrCrIdxNXT).promise().done(function () {
                            if (galSldrCrIdx == maxL) {
                                galSldrCrIdxNXT = galSldrCrIdx;
                                galSldrCrIdx = 0;
                            }
                            else {
                                galSldrCrIdxNXT = galSldrCrIdx;
                                galSldrCrIdx++;
                            }
                            slideMove(galSldrCrIdx, galSldrCrIdxNXT);
                            var setTimeoutS = bm_data_ease_out;
                            if (bm_data_ease_out > 1000) {
                                setTimeoutS = 1000;
                            }
                            window[setNameTO] = setTimeout(window[setNameFT], startInvlTmr);
                        });
                    });
                }
            }
            if ($(_thisslde).length > 1) {
                window[setNameTO] = setTimeout(window[setNameFT], startInvlTmr);
                $(_thisnavbubbl).click(function () {
                    galSldrCrIdxNXT = galSldrCrIdx;
                    galSldrCrIdx = $(this).index();
                    slideMove(galSldrCrIdx, galSldrCrIdxNXT);
                    $(_thisnavbubbl).removeClass("current-slide");
                    $(this).addClass("current-slide");
                });
            }
        });
        $(".bm-gal-slider").hover(function () {
            var setNameTO = "startTmeO_" + $(this).prevAll(".bm-gal-slider").length;
            clearTimeout(window[setNameTO])
        }, function () {
            var setNameTO = "startTmeO_" + $(this).prevAll(".bm-gal-slider").length;
            var setNameFT = "AutStrt_" + $(this).prevAll(".bm-gal-slider").length;
            window[setNameTO] = setTimeout(window[setNameFT], startInvlTmr);
        });
        enableNavClick();

        function startslider() {
            getProperties($(".bm-gal-slider .bm-slide:eq(0)"));
            $(".bm-gal-slider").each(function () {
                if (typeof $(this).attr("bm-data-prnt-id") !== typeof undefined && $(this).attr("bm-data-prnt-id") !== false) {
                    bm_data_prnt_id = $(this).attr("bm-data-prnt-id");
                    bm_data_prnt = $(this).closest("#" + bm_data_prnt_id);
                    $(bm_data_prnt).animate({
                        backgroundColor: bm_data_bck_clr
                    }, bm_data_ease_out);
                }
                else {
                     $(".bm-gal-slider .bm-slide:eq(0) > *").animate({
                        backgroundColor: bm_data_bck_clr
                    }, bm_data_ease_out);
                }
            });
            $(".bm-gal-slider .bm-slide:eq(0) > *").each(function () {
                var this_asset = $(this);
                getProperties(this_asset); /* Fade Effect*/
                if (bm_data_in == "fade") {
                    $(this_asset).css({
                        top: bm_data_top
                        , left: bm_data_left
                        , "opacity": "0"
                    });
                }
                if (bm_data_in == "fadeLeft") {
                    $(this_asset).css("display", "").css({
                        top: bm_data_top
                        , left: "102%"
                        , opacity: 0
                    });
                }
                if (bm_data_in == "fadeRight") {
                    $(this_asset).css("display", "").css({
                        top: bm_data_top
                        , left: "-102%"
                        , opacity: 0
                    });
                }
                if (bm_data_in == "fadeUp") {
                    $(this_asset).css("display", "").css({
                        top: "-102%"
                        , left: bm_data_left
                        , opacity: 0
                    });
                }
                if (bm_data_in == "fadeBottom") {
                    $(this_asset).css("display", "").css({
                        top: "102%"
                        , left: bm_data_left
                        , opacity: 0
                    });
                } /* Slide Effect*/
                if (bm_data_in == "fade") {
                    $(this_asset).css("display", "");
                }
                if (bm_data_in == "slideLeft") {
                    $(this_asset).css("display", "").css({
                        top: bm_data_top
                        , left: "102%"
                    });
                }
                if (bm_data_in == "slideRight") {
                    $(this_asset).css("display", "").css({
                        top: bm_data_top
                        , left: "-102%"
                    });
                }
                if (bm_data_in == "slideUp") {
                    $(this_asset).css("display", "").css({
                        top: "-102%"
                        , left: bm_data_left
                    });
                }
                if (bm_data_in == "slideBottom") {
                    $(this_asset).css("display", "").css({
                        top: "102%"
                        , left: bm_data_left
                    });
                }
                $(".bm-gal-slider .bm-gal-ctnr .bm-ui-loading").fadeOut(function () {
                    $('.bm-gal-slider').css("visibility", "visible").animate({
                        opacity: 1
                    }, 500, function () {
                        getProperties(this_asset); /* Fade Effect*/
                        if (bm_data_in == "fade") {
                            $(this_asset).css("display", "").delay(bm_data_delay).animate({
                                opacity: 1
                            }, bm_data_ease_in);
                        }
                        if (bm_data_in == "fadeLeft" || bm_data_in == "fadeRight") {
                            $(this_asset).css("display", "").delay(bm_data_delay).animate({
                                left: bm_data_left
                                , opacity: 1
                            }, bm_data_ease_in);
                        }
                        if (bm_data_in == "fadeUp" || bm_data_in == "fadeBottom") {
                            $(this_asset).css("display", "").delay(bm_data_delay).animate({
                                top: bm_data_top
                                , opacity: 1
                            }, bm_data_ease_in);
                        } /* Slide Effect*/
                        if (bm_data_in == "slideLeft" || bm_data_in == "slideRight") {
                            $(this_asset).css("display", "").delay(bm_data_delay).animate({
                                left: bm_data_left
                            }, bm_data_ease_in);
                        }
                        if (bm_data_in == "slideUp" || bm_data_in == "slideDwon") {
                            $(this_asset).css("display", "").delay(bm_data_delay).animate({
                                top: bm_data_top
                            }, bm_data_ease_in);
                        }
                    });
                });
            });
        }
        startslider();
        /*resizablevarvar */
        $galsldr = $(".bm-gal-slider .bm-gal-ctnr");
        var elHeight = $galsldr.outerHeight();
        var elWidth = $galsldr.outerWidth();
        var $wrapper = $(".bm-gal-slider");

        function doResize(event, ui) {
            var scale, origin;
            scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);
            $galsldr.css({
                transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
            });
        }
        var starterData = {
            size: {
                width: $wrapper.width()
                , height: $wrapper.height()
            }
        }
        doResize(null, starterData);
        $(window).resize(function () {
            var starterData = {
                size: {
                    width: $wrapper.width()
                    , height: $wrapper.height()
                }
            }
            doResize(null, starterData);
        });
    }
});