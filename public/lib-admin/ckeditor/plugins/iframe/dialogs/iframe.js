﻿/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
  function d(c) {
    var d = this instanceof CKEDITOR.ui.dialog.checkbox;
    c.hasAttribute(this.id) &&
      ((c = c.getAttribute(this.id)),
      d
        ? this.setValue(f[this.id]["true"] == c.toLowerCase())
        : this.setValue(c));
  }
  function e(c) {
    var d = "" === this.getValue(),
      a = this instanceof CKEDITOR.ui.dialog.checkbox,
      e = this.getValue();
    d
      ? c.removeAttribute(this.att || this.id)
      : a
        ? c.setAttribute(this.id, f[this.id][e])
        : c.setAttribute(this.att || this.id, e);
  }
  var f = {
    scrolling: { true: "yes", false: "no" },
    frameborder: { true: "1", false: "0" },
  };
  CKEDITOR.dialog.add("iframe", function (c) {
    var g = c.lang.iframe,
      a = c.lang.common,
      f = c.plugins.dialogadvtab;
    return {
      title: g.title,
      minWidth: 350,
      minHeight: 260,
      getModel: function (b) {
        return (b = b.getSelection().getSelectedElement()) &&
          "iframe" === b.data("cke-real-element-type")
          ? b
          : null;
      },
      onShow: function () {
        this.fakeImage = this.iframeNode = null;
        var b = this.getSelectedElement();
        b &&
          b.data("cke-real-element-type") &&
          "iframe" == b.data("cke-real-element-type") &&
          ((this.fakeImage = b),
          (this.iframeNode = b = c.restoreRealElement(b)),
          this.setupContent(b));
      },
      onOk: function () {
        var b;
        b = this.fakeImage
          ? this.iframeNode
          : new CKEDITOR.dom.element("iframe");
        var a = {},
          d = {};
        this.commitContent(b, a, d);
        b = c.createFakeElement(b, "cke_iframe", "iframe", !0);
        b.setAttributes(d);
        b.setStyles(a);
        this.fakeImage
          ? (b.replace(this.fakeImage), c.getSelection().selectElement(b))
          : c.insertElement(b);
      },
      contents: [
        {
          id: "info",
          label: a.generalTab,
          accessKey: "I",
          elements: [
            {
              type: "vbox",
              padding: 0,
              children: [
                {
                  id: "src",
                  type: "text",
                  label: a.url,
                  required: !0,
                  validate: CKEDITOR.dialog.validate.notEmpty(g.noUrl),
                  setup: d,
                  commit: e,
                },
              ],
            },
            {
              type: "hbox",
              children: [
                {
                  id: "width",
                  type: "text",
                  requiredContent: "iframe[width]",
                  style: "width:100%",
                  labelLayout: "vertical",
                  label: a.width,
                  validate: CKEDITOR.dialog.validate.htmlLength(
                    a.invalidHtmlLength.replace("%1", a.width),
                  ),
                  setup: d,
                  commit: e,
                },
                {
                  id: "height",
                  type: "text",
                  requiredContent: "iframe[height]",
                  style: "width:100%",
                  labelLayout: "vertical",
                  label: a.height,
                  validate: CKEDITOR.dialog.validate.htmlLength(
                    a.invalidHtmlLength.replace("%1", a.height),
                  ),
                  setup: d,
                  commit: e,
                },
                {
                  id: "align",
                  type: "select",
                  requiredContent: "iframe[align]",
                  default: "",
                  items: [
                    [a.notSet, ""],
                    [a.left, "left"],
                    [a.right, "right"],
                    [a.alignTop, "top"],
                    [a.alignMiddle, "middle"],
                    [a.alignBottom, "bottom"],
                  ],
                  style: "width:100%",
                  labelLayout: "vertical",
                  label: a.align,
                  setup: function (b, a) {
                    d.apply(this, arguments);
                    if (a) {
                      var c = a.getAttribute("align");
                      this.setValue((c && c.toLowerCase()) || "");
                    }
                  },
                  commit: function (a, c, d) {
                    e.apply(this, arguments);
                    this.getValue() && (d.align = this.getValue());
                  },
                },
              ],
            },
            {
              type: "hbox",
              widths: ["50%", "50%"],
              children: [
                {
                  id: "scrolling",
                  type: "checkbox",
                  requiredContent: "iframe[scrolling]",
                  label: g.scrolling,
                  setup: d,
                  commit: e,
                },
                {
                  id: "frameborder",
                  type: "checkbox",
                  requiredContent: "iframe[frameborder]",
                  label: g.border,
                  setup: d,
                  commit: e,
                },
              ],
            },
            {
              type: "hbox",
              widths: ["50%", "50%"],
              children: [
                {
                  id: "name",
                  type: "text",
                  requiredContent: "iframe[name]",
                  label: a.name,
                  setup: d,
                  commit: e,
                },
                {
                  id: "title",
                  type: "text",
                  requiredContent: "iframe[title]",
                  label: a.advisoryTitle,
                  setup: d,
                  commit: e,
                },
              ],
            },
            {
              id: "longdesc",
              type: "text",
              requiredContent: "iframe[longdesc]",
              label: a.longDescr,
              setup: d,
              commit: e,
            },
          ],
        },
        f && f.createAdvancedTab(c, { id: 1, classes: 1, styles: 1 }, "iframe"),
      ],
    };
  });
})();
