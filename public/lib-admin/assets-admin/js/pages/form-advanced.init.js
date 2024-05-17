!(function (i) {
  "use strict";
  var t = function () {};
  (t.prototype.initCustomSelect = function () {
    i('[data-plugin="customselect"]').niceSelect();
  }),
    (t.prototype.initSwitchery = function () {
      i('[data-plugin="switchery"]').each(function (t, e) {
        new Switchery(i(this)[0], i(this).data());
      });
    }),
    (t.prototype.initSelect2 = function () {
      i('[data-toggle="select2"]').select2();
    }),
    (t.prototype.initMaxLength = function () {
      i("input#defaultconfig").maxlength({
        warningClass: "badge badge-success",
        limitReachedClass: "badge badge-danger",
      }),
        i("input#thresholdconfig").maxlength({
          threshold: 20,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger",
        }),
        i("input#alloptions").maxlength({
          alwaysShow: !0,
          separator: " out of ",
          preText: "You typed ",
          postText: " chars available.",
          validate: !0,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger",
        }),
        i("textarea#textarea").maxlength({
          alwaysShow: !0,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger",
        }),
        i("input#placement").maxlength({
          alwaysShow: !0,
          placement: "top-left",
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger",
        });
    }),
    (t.prototype.initDateRange = function () {
      var n = { cancelClass: "btn-light", applyButtonClasses: "btn-success" };
      i('[data-toggle="date-picker"]').each(function (t, e) {
        var a = i.extend({}, n, i(e).data());
        i(e).daterangepicker(a);
      });
      var s = {
        startDate: moment().subtract(29, "days"),
        endDate: moment(),
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      };
      i('[data-toggle="date-picker-range"]').each(function (t, e) {
        var a = i.extend({}, s, i(e).data()),
          n = a.targetDisplay;
        i(e).daterangepicker(a, function (t, e) {
          n &&
            i(n).html(
              t.format("MMMM D, YYYY") + " - " + e.format("MMMM D, YYYY"),
            );
        });
      });
    }),
    (t.prototype.initMask = function () {
      i('[data-toggle="input-mask"]').each(function (t, e) {
        var a = i(e).data("maskFormat"),
          n = i(e).data("reverse");
        null != n ? i(e).mask(a, { reverse: n }) : i(e).mask(a);
      });
    }),
    (t.prototype.init = function () {
      this.initCustomSelect(),
        this.initSwitchery(),
        this.initSelect2(),
        this.initMaxLength(),
        this.initDateRange(),
        this.initMask();
    }),
    (i.Components = new t()),
    (i.Components.Constructor = t);
})(window.jQuery),
  (function (t) {
    "use strict";
    window.jQuery.Components.init();
  })();
