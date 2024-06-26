$(function () {
  var k,
    f = -1,
    m = 0;
  $("#showtoast").click(function () {
    var t,
      o,
      e = $("#toastTypeGroup input:radio:checked").val(),
      a = $("#message1").val(),
      n = $("#title").val() || "",
      s = $("#showDuration"),
      i = $("#hideDuration"),
      r = $("#timeOut"),
      l = $("#extendedTimeOut"),
      c = $("#showEasing"),
      p = $("#hideEasing"),
      d = $("#showMethod"),
      h = $("#hideMethod"),
      u = m++,
      g = $("#addClear").prop("checked");
    (toastr.options = {
      closeButton: $("#closeButton").prop("checked"),
      debug: $("#debugInfo").prop("checked"),
      newestOnTop: $("#newestOnTop").prop("checked"),
      progressBar: $("#progressBar").prop("checked"),
      positionClass:
        $("#positionGroup input:radio:checked").val() || "toast-top-right",
      preventDuplicates: $("#preventDuplicates").prop("checked"),
      onclick: null,
    }),
      $("#addBehaviorOnToastClick").prop("checked") &&
        (toastr.options.onclick = function () {
          alert("You can perform some custom action after a toast goes away");
        }),
      s.val().length && (toastr.options.showDuration = s.val()),
      i.val().length && (toastr.options.hideDuration = i.val()),
      r.val().length && (toastr.options.timeOut = g ? 0 : r.val()),
      l.val().length && (toastr.options.extendedTimeOut = g ? 0 : l.val()),
      c.val().length && (toastr.options.showEasing = c.val()),
      p.val().length && (toastr.options.hideEasing = p.val()),
      d.val().length && (toastr.options.showMethod = d.val()),
      h.val().length && (toastr.options.hideMethod = h.val()),
      g &&
        ((t = (t = a) || "Clear itself?"),
        (a = t +=
          '<br /><br /><button type="button" class="btn btn-default clear">Yes</button>'),
        (toastr.options.tapToDismiss = !1)),
      a ||
        (++f ===
          (o = [
            "My name is Inigo Montoya. You killed my father. Prepare to die!",
            "Are you the six fingered man?",
            "Inconceivable!",
            "I do not think that means what you think it means.",
            "Have fun storming the castle!",
          ]).length && (f = 0),
        (a = o[f])),
      $("#toastrOptions").text(
        'Command: toastr["' +
          e +
          '"]("' +
          a +
          (n ? '", "' + n : "") +
          '")\n\ntoastr.options = ' +
          JSON.stringify(toastr.options, null, 2),
      );
    var v = toastr[e](a, n);
    void 0 !== (k = v) &&
      (v.find("#okBtn").length &&
        v.delegate("#okBtn", "click", function () {
          alert("you clicked me. i was toast #" + u + ". goodbye!"), v.remove();
        }),
      v.find("#surpriseBtn").length &&
        v.delegate("#surpriseBtn", "click", function () {
          alert(
            "Surprise! you clicked me. i was toast #" +
              u +
              ". You could perform an action here.",
          );
        }),
      v.find(".clear").length &&
        v.delegate(".clear", "click", function () {
          toastr.clear(v, { force: !0 });
        }));
  }),
    $("#clearlasttoast").click(function () {
      toastr.clear(k);
    }),
    $("#cleartoasts").click(function () {
      toastr.clear();
    });
});
