(this["webpackJsonplearning-world"] =
  this["webpackJsonplearning-world"] || []).push([
  [0],
  {
    113: function (e, t, n) {},
    114: function (e, t, n) {},
    115: function (e, t, n) {},
    116: function (e, t, n) {},
    123: function (e, t, n) {},
    142: function (e, t, n) {},
    143: function (e, t, n) {},
    148: function (e, t, n) {},
    149: function (e, t, n) {},
    151: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        a = n.n(c),
        s = n(12),
        i = n.n(s),
        r = (n(113), n(9)),
        o = (n(114), n(17)),
        l = n(14),
        j = n.p + "static/media/Nilkhet.be7d6116.jfif",
        d = (n(115), n(116), n(194)),
        b = n(196),
        u = n(198),
        h = n(199),
        O = n(200),
        m = n(201),
        p = n(202),
        x = n(65),
        f = n(61),
        g = n(91),
        v = n.n(g),
        N = n(1),
        w = Object(d.a)(function (e) {
          return {
            root: { width: 350 },
            media: { height: 300, paddingTop: "56.25%" },
            expand: {
              transform: "rotate(0deg)",
              marginLeft: "auto",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shortest,
              }),
            },
            expandOpen: { transform: "rotate(180deg)" },
            avatar: { backgroundColor: f.a[500] },
          };
        });
      function y(e) {
        var t,
          n,
          c = e.book,
          a = w(),
          s = Object(l.g)(),
          i = c._id,
          r = c.imageURL;
        return Object(N.jsxs)(b.a, {
          className: a.root,
          id: "bookItem",
          children: [
            Object(N.jsx)(u.a, {
              className: a.media,
              image: r,
              title: "Paella dish",
            }),
            Object(N.jsx)("img", {
              src: "/images/".concat(i, ".png"),
              alt: "",
            }),
            Object(N.jsx)(h.a, {
              children: Object(N.jsx)(x.a, {
                variant: "body2",
                color: "textSecondary",
                component: "p",
                children:
                  null === c ||
                  void 0 === c ||
                  null === (t = c.AddEvents) ||
                  void 0 === t
                    ? void 0
                    : t.name,
              }),
            }),
            Object(N.jsxs)(O.a, {
              disableSpacing: !0,
              children: [
                Object(N.jsxs)(m.a, {
                  "aria-label": "price",
                  children: [
                    Object(N.jsx)(v.a, {}),
                    ": ",
                    null === c ||
                    void 0 === c ||
                    null === (n = c.AddEvents) ||
                    void 0 === n
                      ? void 0
                      : n.cost,
                  ],
                }),
                Object(N.jsx)(p.a, {
                  className: " vehicleBtn ml-5 pr-5 pl-5",
                  onClick: function () {
                    return (e = i), void s.push("/book/".concat(e));
                    var e;
                  },
                  variant: "contained",
                  color: "primary",
                  children: "Buy Now",
                }),
              ],
            }),
          ],
        });
      }
      var k = n(203),
        S = function () {
          var e = Object(c.useState)([]),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = t[1];
          return (
            Object(c.useEffect)(function () {
              fetch("http://localhost:5055/events")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return a(e);
                });
            }, []),
            console.log(n),
            Object(N.jsx)(N.Fragment, {
              children: Object(N.jsx)("div", {
                style: {
                  backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(".concat(
                    j,
                    ")"
                  ),
                },
                className: "background",
                children: Object(N.jsxs)("div", {
                  className: "container allBook",
                  children: [
                    0 === n.length &&
                      Object(N.jsx)(k.a, { className: "text-center mt-5" }),
                    n.map(function (e) {
                      return Object(N.jsx)(y, { book: e }, e._id);
                    }),
                  ],
                }),
              }),
            })
          );
        },
        C = function (e) {
          var t = e.book,
            n = null === t || void 0 === t ? void 0 : t.AddEvents,
            c = n.name,
            a = n.cost,
            s = n.author;
          return Object(N.jsx)("section", {
            className: "container-md ",
            children: Object(N.jsxs)("div", {
              className: "row container-md",
              children: [
                Object(N.jsx)("div", {
                  className: " col-3",
                  children: Object(N.jsx)("p", {
                    className: "bookname",
                    children: c,
                  }),
                }),
                Object(N.jsx)("div", {
                  className: " col-3",
                  children: Object(N.jsx)("p", { children: s }),
                }),
                Object(N.jsx)("div", {
                  className: " col-3",
                  children: Object(N.jsx)("p", { children: a }),
                }),
                Object(N.jsx)("div", {
                  className: " col-3",
                  children: Object(N.jsx)("button", {
                    onClick: function () {
                      return (
                        (e = t._id),
                        void fetch(
                          "http://localhost:5055/deleteEvent/".concat(e),
                          { method: "DELETE" }
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {})
                      );
                      var e;
                    },
                    className: "btn btn-primary mb-2",
                    children: "Delete",
                  }),
                }),
              ],
            }),
          });
        },
        I =
          (n(123),
          function () {
            var e = Object(c.useState)([]),
              t = Object(r.a)(e, 2),
              n = t[0],
              a = t[1];
            return (
              Object(c.useEffect)(function () {
                fetch("http://localhost:5055/events")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return a(e);
                  });
              }, []),
              Object(N.jsx)(N.Fragment, {
                children: Object(N.jsxs)("section", {
                  className: "container-md Orders mt-5",
                  children: [
                    Object(N.jsx)("br", {}),
                    Object(N.jsx)("br", {}),
                    Object(N.jsxs)("div", {
                      className: "row container-md OrdersTitle",
                      children: [
                        Object(N.jsx)("div", {
                          className: " col-3",
                          children: Object(N.jsx)("b", {
                            children: Object(N.jsx)("h5", {
                              children: "Book Name",
                            }),
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: " col-3",
                          children: Object(N.jsx)("b", {
                            children: Object(N.jsx)("h5", {
                              children: " Author Name",
                            }),
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: " col-3",
                          children: Object(N.jsx)("b", {
                            children: Object(N.jsx)("h5", {
                              children: "Price",
                            }),
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: " col-3",
                          children: Object(N.jsx)("b", {
                            children: Object(N.jsx)("h5", {
                              children: "Action",
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(N.jsx)("br", {}),
                    Object(N.jsx)("br", {}),
                    Object(N.jsxs)("div", {
                      className: "row ",
                      children: [
                        0 === n.length &&
                          Object(N.jsx)(k.a, {
                            className: "text-center mt-5 ml-5",
                          }),
                        n.map(function (e) {
                          return Object(N.jsx)(C, { book: e });
                        }),
                      ],
                    }),
                  ],
                }),
              })
            );
          }),
        A = n(92),
        B = n.n(A),
        E = n(60),
        P =
          (n(142),
          function () {
            var e = Object(E.a)(),
              t = e.register,
              n = e.handleSubmit,
              a = (e.watch, e.errors, Object(c.useState)(null)),
              s = Object(r.a)(a, 2),
              i = s[0],
              o = s[1];
            return Object(N.jsxs)("div", {
              className: "container-md mt-5",
              children: [
                Object(N.jsx)("h1", {
                  className: "mt-5 mb-5",
                  children: "Add Book",
                }),
                Object(N.jsxs)("form", {
                  onSubmit: n(function (e) {
                    var t = { imageURL: i, AddEvents: e };
                    fetch("http://localhost:5055/addEvent", {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(t),
                    }).then(function (e) {
                      return console.log("server side response", e);
                    });
                  }),
                  className: "container-md",
                  children: [
                    Object(N.jsxs)("div", {
                      className: "row",
                      children: [
                        " ",
                        Object(N.jsx)("input", {
                          className: "col-6 same-desgine ",
                          name: "name",
                          placeholder: "name",
                          ref: t({ required: !0 }),
                        }),
                        Object(N.jsx)("input", {
                          className: "col-6 same-desgine",
                          name: "author",
                          placeholder: "author name",
                          ref: t({ required: !0 }),
                        }),
                      ],
                    }),
                    Object(N.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(N.jsx)("input", {
                          className: "col-6 same-desgine",
                          name: "cost",
                          placeholder: "price",
                          ref: t({ required: !0 }),
                        }),
                        Object(N.jsx)("br", {}),
                        Object(N.jsx)("input", {
                          className: "col-6",
                          name: "exampleRequired",
                          type: "file",
                          onChange: function (e) {
                            var t = new FormData();
                            t.set("key", "03b008c33977f6a3ea82d4ba47c18173"),
                              t.append("image", e.target.files[0]),
                              B.a
                                .post("https://api.imgbb.com/1/upload", t)
                                .then(function (e) {
                                  o(e.data.data.display_url);
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                          },
                        }),
                      ],
                    }),
                    Object(N.jsx)("br", {}),
                    Object(N.jsx)("input", {
                      type: "submit",
                      className: " btn btn-primary pl-4 pt-2 pb-2 pr-4",
                      value: "Save",
                    }),
                  ],
                }),
              ],
            });
          }),
        q = n(28),
        L = (n(143), n.p, n.p, n.p + "static/media/image3.3756533f.jpg"),
        D = n.p + "static/media/logo.29290f88.png",
        T = n(29),
        W =
          (n(144),
          {
            apiKey: "AIzaSyDzhVznafjnct2HWF6t86Q_m5CDGAE6PtE",
            authDomain: "learning-world-library.firebaseapp.com",
            projectId: "learning-world-library",
            storageBucket: "learning-world-library.appspot.com",
            messagingSenderId: "682853894841",
            appId: "1:682853894841:web:1afa76baf38df3dcbda968",
            measurementId: "G-QKQ1985CMY",
          }),
        M = function (e) {
          T.a
            .auth()
            .currentUser.updateProfile({ displayName: e })
            .then(function () {
              console.log("user name updated successfully");
            })
            .catch(function (e) {
              console.log(e);
            });
        },
        F = n(62),
        R = n(63);
      var V = function () {
          var e = Object(c.useState)(!1),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = t[1],
            s = Object(c.useState)({
              isSignIn: !1,
              newUser: !1,
              name: "",
              email: "",
              photo: "",
              password: "",
            }),
            i = Object(r.a)(s, 2),
            o = i[0],
            j = i[1];
          0 === T.a.apps.length && T.a.initializeApp(W);
          var d = Object(l.g)(),
            b = (Object(l.h)().state || { from: { pathname: "/" } }).from,
            u = Object(c.useContext)(Be),
            h = Object(r.a)(u, 2),
            O = (h[0], h[1]),
            m = function (e, t) {
              j(e), O(e), t && d.replace(b);
            },
            p = function (e) {
              var t = !0;
              if (
                ("email" === e.target.name &&
                  (t = /\S+@\S+\.\S+/.test(e.target.value)),
                "password" === e.target.name)
              ) {
                var n = e.target.value.length > 6,
                  c = /\d{1}/.test(e.target.value);
                t = n && c;
              }
              if (t) {
                var a = Object(q.a)({}, o);
                (a[e.target.name] = e.target.value), j(a);
              }
            };
          return Object(N.jsxs)(N.Fragment, {
            children: [
              Object(N.jsx)("img", { src: D, alt: "", className: "logo" }),
              Object(N.jsx)("section", {
                className: "container-md LoginSection",
                children: Object(N.jsxs)("section", {
                  className: "row",
                  children: [
                    Object(N.jsxs)("div", {
                      className: " mt-5 LoginSectionForm d-block",
                      id: "main col-sm-12 col-md-6",
                      children: [
                        n
                          ? Object(N.jsx)("h1", {
                              className: "LoginSectionTitle",
                              children: "Create an account",
                            })
                          : Object(N.jsx)("h1", {
                              className: "LoginSectionTitle",
                              children: "Login",
                            }),
                        Object(N.jsx)("br", {}),
                        Object(N.jsxs)("form", {
                          onSubmit: function (e) {
                            var t, c, a;
                            n &&
                              o.email &&
                              o.password &&
                              ((t = o.name),
                              (c = o.email),
                              (a = o.password),
                              T.a
                                .auth()
                                .createUserWithEmailAndPassword(c, a)
                                .then(function (e) {
                                  var n = e.user;
                                  return (
                                    (n.error = ""), (n.success = !0), M(t), n
                                  );
                                })
                                .catch(function (e) {
                                  var t = {};
                                  return (
                                    (t.error = e.message), (t.success = !1), t
                                  );
                                })).then(function (e) {
                                j(e), O(e), d.replace(b);
                              }),
                              !n &&
                                o.email &&
                                o.password &&
                                (function (e, t) {
                                  return T.a
                                    .auth()
                                    .signInWithEmailAndPassword(e, t)
                                    .then(function (e) {
                                      var t = e.user;
                                      return (
                                        (t.error = ""), (t.success = !0), t
                                      );
                                    })
                                    .catch(function (e) {
                                      var t = {};
                                      return (
                                        (t.error = e.message),
                                        (t.success = !1),
                                        t
                                      );
                                    });
                                })(o.email, o.password).then(function (e) {
                                  j(e), O(e), d.replace(b);
                                }),
                              e.preventDefault();
                          },
                          children: [
                            n &&
                              Object(N.jsx)("input", {
                                type: "text",
                                onBlur: p,
                                placeholder: "Your name",
                                required: !0,
                                name: "name",
                                className: "mb-2",
                              }),
                            Object(N.jsx)("br", {}),
                            Object(N.jsx)("input", {
                              type: "text",
                              onBlur: p,
                              placeholder: "Your email address",
                              required: !0,
                              name: "email",
                              className: "mb-3",
                            }),
                            Object(N.jsx)("br", {}),
                            Object(N.jsx)("input", {
                              type: "password",
                              id: "txtPassword",
                              onBlur: p,
                              name: "password",
                              placeholder: "Your password",
                              required: !0,
                              className: "mb-2",
                            }),
                            Object(N.jsx)("br", {}),
                            n &&
                              Object(N.jsx)("input", {
                                id: "txtConfirmPassword",
                                type: "password",
                                onBlur: p,
                                placeholder: "Confirm password",
                                required: !0,
                                name: "Confirmpassword ",
                                className: "mb-2",
                              }),
                            Object(N.jsx)("br", {}),
                            Object(N.jsxs)("p", {
                              children: [
                                Object(N.jsx)("input", {
                                  type: "checkbox",
                                  name: "newUser",
                                  id: "",
                                }),
                                "Remember Me",
                              ],
                            }),
                            Object(N.jsx)("br", {}),
                            Object(N.jsx)("input", {
                              id: "submit",
                              type: "submit",
                              value: n ? "sign up" : "sign in",
                              className: "signupSignInBtn mb-3",
                            }),
                            Object(N.jsx)("br", {}),
                            n
                              ? Object(N.jsx)("p", {})
                              : Object(N.jsxs)("p", {
                                  className: "createAccount",
                                  children: [
                                    "Dont have an account?",
                                    Object(N.jsx)("p", {
                                      onClick: function () {
                                        return a(!n);
                                      },
                                      className: "text-danger createAccount",
                                      style: { cursor: "pointer" },
                                      children: "Create an account",
                                    }),
                                  ],
                                }),
                          ],
                        }),
                        Object(N.jsx)("p", {
                          style: { color: "red" },
                          children: o.error,
                        }),
                        o.success &&
                          Object(N.jsxs)("p", {
                            style: { color: "green" },
                            children: [
                              "User ",
                              n ? "created" : "login",
                              " successfully",
                            ],
                          }),
                        Object(N.jsxs)("div", {
                          className: "mt-5 ",
                          children: [
                            o.isSignIn
                              ? Object(N.jsxs)("button", {
                                  onClick: function () {
                                    T.a
                                      .auth()
                                      .signOut()
                                      .then(function (e) {
                                        return {
                                          isSignIn: !1,
                                          name: "",
                                          email: "",
                                          photo: "",
                                          error: "",
                                          success: !1,
                                        };
                                      })
                                      .catch(function (e) {
                                        console.log(e);
                                      })
                                      .then(function (e) {
                                        m(e, !1);
                                      });
                                  },
                                  children: [
                                    Object(N.jsx)(F.a, { icon: R.b }),
                                    "sign out",
                                  ],
                                })
                              : Object(N.jsxs)("button", {
                                  onClick: function () {
                                    (function () {
                                      var e = new T.a.auth.GoogleAuthProvider();
                                      return T.a
                                        .auth()
                                        .signInWithPopup(e)
                                        .then(function (e) {
                                          var t = e.user,
                                            n = t.displayName,
                                            c = t.photoURL;
                                          return {
                                            isSignIn: !0,
                                            name: n,
                                            email: t.email,
                                            photo: c,
                                            success: !0,
                                          };
                                        })
                                        .catch(function (e) {
                                          console.log(e),
                                            console.log(e.message);
                                        });
                                    })().then(function (e) {
                                      m(e, !0);
                                    });
                                  },
                                  className: "gBtn",
                                  children: [
                                    Object(N.jsx)(F.a, { icon: R.b }),
                                    "sign in With Google",
                                  ],
                                }),
                            Object(N.jsx)("br", {}),
                            Object(N.jsxs)("button", {
                              onClick: function () {
                                (function () {
                                  var e = new T.a.auth.FacebookAuthProvider();
                                  return T.a
                                    .auth()
                                    .signInWithPopup(e)
                                    .then(function (e) {
                                      e.credential.accessToken;
                                      var t = e.user;
                                      return (t.success = !0), t;
                                    })
                                    .catch(function (e) {
                                      e.code, e.message, e.email, e.credential;
                                    });
                                })().then(function (e) {
                                  m(e, !0);
                                });
                              },
                              className: "fbBtn",
                              children: [
                                Object(N.jsx)(F.a, { icon: R.a }),
                                "Sign in using Facebook",
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(N.jsx)("div", {
                      className:
                        "LoginSectionImage col-sm-12 col-md-6 container-md",
                      children: Object(N.jsx)("img", { src: L, alt: "" }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        z =
          (n(148),
          function () {
            var e,
              t,
              n = Object(l.i)().bookId,
              a = Object(c.useState)([]),
              s = Object(r.a)(a, 2),
              i = s[0],
              o = s[1],
              j = Object(c.useState)(!1),
              d = Object(r.a)(j, 2),
              b = d[0],
              u = d[1],
              h = Object(c.useContext)(Be),
              O = Object(r.a)(h, 2),
              m = O[0],
              p = (O[1], Object(E.a)()),
              x = p.register,
              f = p.handleSubmit,
              g = (p.watch, Object(c.useState)([])),
              v = Object(r.a)(g, 2),
              w = v[0],
              y = v[1];
            Object(c.useEffect)(function () {
              fetch("http://localhost:5055/events")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return y(e);
                });
            }, []);
            var k =
              null === w || void 0 === w
                ? void 0
                : w.find(function (e) {
                    return (null === e || void 0 === e ? void 0 : e._id) === n;
                  });
            return (
              Object(c.useEffect)(function () {
                fetch("http://localhost:5055/orders?email=" + m.email)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return o(e);
                  });
              }, []),
              console.log(m),
              Object(N.jsx)(N.Fragment, {
                children: b
                  ? Object(N.jsxs)("section", {
                      className: "container-md",
                      children: [
                        Object(N.jsxs)("div", {
                          className: "row mt-5 mb-5",
                          children: [
                            Object(N.jsx)("div", {
                              className: " col-4",
                              children: Object(N.jsx)("b", {
                                children: Object(N.jsx)("h3", {
                                  children: "Book Name",
                                }),
                              }),
                            }),
                            Object(N.jsx)("div", {
                              className: " col-4",
                              children: Object(N.jsx)("b", {
                                children: Object(N.jsx)("h3", {
                                  children: " Author Name",
                                }),
                              }),
                            }),
                            Object(N.jsx)("div", {
                              className: " col-4",
                              children: Object(N.jsx)("b", {
                                children: Object(N.jsx)("h3", {
                                  children: "Price",
                                }),
                              }),
                            }),
                          ],
                        }),
                        i.map(function (e) {
                          var t, n;
                          return Object(N.jsxs)("div", {
                            className: "row text-justify",
                            children: [
                              Object(N.jsx)("p", {
                                className: "col-4",
                                children:
                                  null === e ||
                                  void 0 === e ||
                                  null === (t = e.shipment) ||
                                  void 0 === t
                                    ? void 0
                                    : t.bookName,
                              }),
                              Object(N.jsx)("p", {
                                className: "col-4",
                                children:
                                  null === e || void 0 === e ? void 0 : e.name,
                              }),
                              Object(N.jsx)("p", {
                                className: "col-4",
                                children:
                                  null === e ||
                                  void 0 === e ||
                                  null === (n = e.shipment) ||
                                  void 0 === n
                                    ? void 0
                                    : n.cost,
                              }),
                            ],
                          });
                        }),
                      ],
                    })
                  : Object(N.jsx)("section", {
                      className: "bookingContainer container-md",
                      children: Object(N.jsxs)("div", {
                        className: "bookDetailsContainer",
                        children: [
                          Object(N.jsx)("h3", { children: "Checkout" }),
                          Object(N.jsx)("button", {
                            className: "btn btn-primary",
                            onClick: function () {
                              return u(!b);
                            },
                            children: "View Order",
                          }),
                          Object(N.jsxs)("div", {
                            class: "row",
                            children: [
                              Object(N.jsx)("input", {
                                readOnly: !0,
                                type: "text",
                                className: "col-4 text-center",
                                defaultValue: "Description",
                              }),
                              Object(N.jsx)("input", {
                                readOnly: !0,
                                type: "text",
                                className: "col-4 text-center",
                                defaultValue: "Quantity",
                              }),
                              Object(N.jsx)("input", {
                                readOnly: !0,
                                type: "text",
                                className: "col-4 text-center",
                                defaultValue: "Price",
                              }),
                            ],
                          }),
                          Object(N.jsxs)("form", {
                            className: "ship-form row",
                            onSubmit: f(function (e) {
                              var t = Object(q.a)(
                                Object(q.a)({ shipment: e }, m),
                                {},
                                { orderTime: new Date() }
                              );
                              fetch("http://localhost:5055/addOrder", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(t),
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  e && alert("order placed successfully");
                                });
                            }),
                            children: [
                              Object(N.jsx)("input", {
                                className: "d-none",
                                name: "id",
                                defaultValue:
                                  null === k || void 0 === k ? void 0 : k._id,
                                ref: x({ required: !0 }),
                                placeholder: "book cost",
                              }),
                              Object(N.jsx)("input", {
                                className: " col-4 text-center",
                                readOnly: !0,
                                name: "bookName",
                                defaultValue:
                                  null === k ||
                                  void 0 === k ||
                                  null === (e = k.AddEvents) ||
                                  void 0 === e
                                    ? void 0
                                    : e.name,
                                ref: x({ required: !0 }),
                              }),
                              " ",
                              Object(N.jsx)("input", {
                                className: "  col-4 text-center",
                                readOnly: !0,
                                name: "quantity",
                                defaultValue: 1,
                                ref: x({ required: !0 }),
                                placeholder: "book cost",
                              }),
                              " ",
                              Object(N.jsx)("input", {
                                className: " col-4 text-center",
                                readOnly: !0,
                                name: "cost",
                                defaultValue:
                                  null === k ||
                                  void 0 === k ||
                                  null === (t = k.AddEvents) ||
                                  void 0 === t
                                    ? void 0
                                    : t.cost,
                                ref: x({ required: !0 }),
                                placeholder: "book cost",
                              }),
                              Object(N.jsx)("input", {
                                type: "submit",
                                value: "Checkout",
                                className: "btn btn-primary submit",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
              })
            );
          }),
        U = n(11),
        _ = (n(149), n(16)),
        G = n(208),
        J = n(209),
        K = n(214),
        Q = n(206),
        Y = n(205),
        H = n(215),
        X = n(94),
        $ = n.n(X),
        Z = n(95),
        ee = n.n(Z),
        te = n(73),
        ne = n.n(te),
        ce = n(64),
        ae = n.n(ce),
        se = n(72),
        ie = n.n(se),
        re = n(96),
        oe = n.n(re),
        le = n(5),
        je = n(34),
        de = n(216),
        be = n(207),
        ue = n(204),
        he = n(210),
        Oe = n(97),
        me = n.n(Oe),
        pe = n(98),
        xe = n.n(pe),
        fe = n(153),
        ge = n(211),
        ve = n(212),
        Ne = n(99),
        we = n.n(Ne),
        ye = 240,
        ke = Object(d.a)(function (e) {
          var t;
          return {
            grow: { flexGrow: 1 },
            menuButton: {},
            title: Object(U.a)({ display: "none" }, e.breakpoints.up("sm"), {
              display: "block",
            }),
            search: Object(U.a)(
              {
                position: "relative",
                borderRadius: e.shape.borderRadius,
                backgroundColor: Object(_.b)(e.palette.common.white, 0.15),
                "&:hover": {
                  backgroundColor: Object(_.b)(e.palette.common.white, 0.25),
                },
                marginRight: e.spacing(2),
                marginLeft: 0,
                width: "100%",
              },
              e.breakpoints.up("sm"),
              { marginLeft: e.spacing(3), width: "auto" }
            ),
            searchIcon: {
              padding: e.spacing(0, 2),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            inputRoot: { color: "inherit" },
            inputInput: Object(U.a)(
              {
                padding: e.spacing(1, 1, 1, 0),
                paddingLeft: "calc(1em + ".concat(e.spacing(4), "px)"),
                transition: e.transitions.create("width"),
                width: "100%",
              },
              e.breakpoints.up("md"),
              { width: "20ch" }
            ),
            sectionDesktop: Object(U.a)(
              { display: "none" },
              e.breakpoints.up("md"),
              { display: "flex" }
            ),
            sectionMobile:
              ((t = { display: "flex" }),
              Object(U.a)(t, e.breakpoints.up("md"), { display: "none" }),
              Object(U.a)(t, "list", { width: 250 }),
              Object(U.a)(t, "fullList", { width: "auto" }),
              Object(U.a)(t, "root", { display: "flex" }),
              Object(U.a)(t, "appBar", {
                transition: e.transitions.create(["margin", "width"], {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
              }),
              Object(U.a)(t, "appBarShift", {
                width: "calc(100% - ".concat(ye, "px)"),
                marginLeft: ye,
                transition: e.transitions.create(["margin", "width"], {
                  easing: e.transitions.easing.easeOut,
                  duration: e.transitions.duration.enteringScreen,
                }),
              }),
              Object(U.a)(t, "hide", { display: "none" }),
              Object(U.a)(t, "drawer", { width: ye, flexShrink: 0 }),
              Object(U.a)(t, "drawerPaper", { width: ye }),
              Object(U.a)(
                t,
                "drawerHeader",
                Object(q.a)(
                  Object(q.a)(
                    {
                      display: "flex",
                      alignItems: "center",
                      padding: e.spacing(0, 1),
                    },
                    e.mixins.toolbar
                  ),
                  {},
                  { justifyContent: "flex-end" }
                )
              ),
              Object(U.a)(t, "content", {
                flexGrow: 1,
                padding: e.spacing(3),
                transition: e.transitions.create("margin", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                marginLeft: -240,
              }),
              Object(U.a)(t, "contentShift", {
                transition: e.transitions.create("margin", {
                  easing: e.transitions.easing.easeOut,
                  duration: e.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
              }),
              t),
          };
        }),
        Se = function () {
          var e = ke(),
            t = a.a.useState(null),
            n = Object(r.a)(t, 2),
            s = n[0],
            i = n[1],
            l = a.a.useState(null),
            j = Object(r.a)(l, 2),
            d = j[0],
            b = j[1],
            u = Boolean(s),
            h = Boolean(d),
            O = function (e) {
              i(e.currentTarget);
            },
            p = function () {
              b(null);
            },
            f = function () {
              i(null), p();
            },
            g = Object(je.a)(),
            v = a.a.useState(!1),
            w = Object(r.a)(v, 2),
            y = w[0],
            k = w[1],
            S = "primary-search-account-menu",
            C = Object(N.jsxs)(H.a, {
              anchorEl: s,
              anchorOrigin: { vertical: "top", horizontal: "right" },
              id: S,
              keepMounted: !0,
              transformOrigin: { vertical: "top", horizontal: "right" },
              open: u,
              onClose: f,
              children: [
                Object(N.jsx)(Y.a, { onClick: f, children: "Profile" }),
                Object(N.jsx)(Y.a, { onClick: f, children: "My account" }),
              ],
            }),
            I = "primary-search-account-menu-mobile",
            A = Object(N.jsxs)(H.a, {
              anchorEl: d,
              anchorOrigin: { vertical: "top", horizontal: "right" },
              id: I,
              keepMounted: !0,
              transformOrigin: { vertical: "top", horizontal: "right" },
              open: h,
              onClose: p,
              children: [
                Object(N.jsxs)(Y.a, {
                  children: [
                    Object(N.jsx)(m.a, {
                      "aria-label": "show 4 new mails",
                      color: "inherit",
                      children: Object(N.jsx)(Q.a, {
                        badgeContent: 4,
                        color: "secondary",
                        children: Object(N.jsx)(ae.a, {}),
                      }),
                    }),
                    Object(N.jsx)("p", { children: "Messages" }),
                  ],
                }),
                Object(N.jsxs)(Y.a, {
                  children: [
                    Object(N.jsx)(m.a, {
                      "aria-label": "show 11 new notifications",
                      color: "inherit",
                      children: Object(N.jsx)(Q.a, {
                        badgeContent: 11,
                        color: "secondary",
                        children: Object(N.jsx)(ie.a, {}),
                      }),
                    }),
                    Object(N.jsx)("p", { children: "Notifications" }),
                  ],
                }),
                Object(N.jsxs)(Y.a, {
                  onClick: O,
                  children: [
                    Object(N.jsx)(m.a, {
                      "aria-label": "account of current user",
                      "aria-controls": "primary-search-account-menu",
                      "aria-haspopup": "true",
                      color: "inherit",
                      children: Object(N.jsx)(ne.a, {}),
                    }),
                    Object(N.jsx)("p", { children: "Profile" }),
                  ],
                }),
              ],
            }),
            B = Object(c.useContext)(Be),
            E = Object(r.a)(B, 2),
            P = E[0];
          E[1];
          return (
            console.log(P.photo),
            Object(N.jsx)(N.Fragment, {
              children: Object(N.jsxs)("div", {
                className: (e.grow, e.root),
                children: [
                  Object(N.jsx)(be.a, {}),
                  Object(N.jsx)(G.a, {
                    position: "fixed",
                    className: Object(le.a)(
                      e.appBar,
                      Object(U.a)({}, e.appBarShift, y)
                    ),
                    id: "navbar2",
                    children: " ",
                  }),
                  Object(N.jsxs)(J.a, {
                    children: [
                      Object(N.jsx)(G.a, {
                        position: "fixed",
                        id: "navbar",
                        children: Object(N.jsxs)(J.a, {
                          id: "navbar",
                          children: [
                            Object(N.jsx)(m.a, {
                              color: "inherit",
                              "aria-label": "open drawer",
                              onClick: function () {
                                k(!0);
                              },
                              edge: "start",
                              className: Object(le.a)(
                                e.menuButton,
                                y && e.hide
                              ),
                              children: Object(N.jsx)($.a, {}),
                            }),
                            Object(N.jsx)("img", {
                              src: D,
                              alt: "",
                              id: "Logo",
                            }),
                            Object(N.jsx)(x.a, {
                              className: e.title,
                              variant: "h6",
                              noWrap: !0,
                              children: "Learning World",
                            }),
                            Object(N.jsx)(x.a, {
                              className: e.title,
                              variant: "h6",
                              noWrap: !0,
                              children: Object(N.jsx)("nav", {
                                children: Object(N.jsx)(o.b, {
                                  to: "/home",
                                  className: "login",
                                  children: "BOOKS",
                                }),
                              }),
                            }),
                            Object(N.jsx)(x.a, {
                              className: e.title,
                              variant: "h6",
                              noWrap: !0,
                              children: Object(N.jsx)("nav", {
                                children: Object(N.jsx)(o.b, {
                                  to: "/home",
                                  className: "login",
                                  children: "EXAM",
                                }),
                              }),
                            }),
                            Object(N.jsx)(x.a, {
                              className: e.title,
                              variant: "h6",
                              noWrap: !0,
                              children: Object(N.jsx)("nav", {
                                children: Object(N.jsx)(o.b, {
                                  to: "/home",
                                  className: "login",
                                  children: "COMPITION",
                                }),
                              }),
                            }),
                            Object(N.jsx)(x.a, {
                              className: e.title,
                              variant: "h6",
                              noWrap: !0,
                              children: Object(N.jsx)("nav", {
                                children: Object(N.jsx)(o.b, {
                                  to: "/Admin",
                                  className: "login",
                                  children: "ADMIN",
                                }),
                              }),
                            }),
                            Object(N.jsx)(x.a, {
                              className: e.title,
                              variant: "h6",
                              noWrap: !0,
                              children: Object(N.jsx)("nav", {
                                children: Object(N.jsx)(o.b, {
                                  to: "/Contact",
                                  className: "login",
                                  children: "CONTACT",
                                }),
                              }),
                            }),
                            Object(N.jsxs)("div", {
                              className: e.search,
                              children: [
                                Object(N.jsx)("div", {
                                  className: e.searchIcon,
                                  children: Object(N.jsx)(ee.a, {
                                    className: "headerSearch",
                                  }),
                                }),
                                Object(N.jsx)(K.a, {
                                  placeholder: "Search\u2026",
                                  classes: {
                                    root: e.inputRoot,
                                    input: e.inputInput,
                                  },
                                  inputProps: { "aria-label": "search" },
                                  className: "headerSearch",
                                }),
                              ],
                            }),
                            Object(N.jsx)("div", { className: e.grow }),
                            Object(N.jsxs)("div", {
                              className: e.sectionDesktop,
                              children: [
                                Object(N.jsx)(m.a, {
                                  "aria-label": "show 4 new mails",
                                  color: "inherit",
                                  children: Object(N.jsx)(Q.a, {
                                    badgeContent: 4,
                                    color: "secondary",
                                    children: Object(N.jsx)(ae.a, {}),
                                  }),
                                }),
                                Object(N.jsx)(m.a, {
                                  "aria-label": "show 17 new notifications",
                                  color: "inherit",
                                  children: Object(N.jsx)(Q.a, {
                                    badgeContent: 17,
                                    color: "secondary",
                                    children: Object(N.jsx)(ie.a, {}),
                                  }),
                                }),
                                Object(N.jsx)(m.a, {
                                  edge: "end",
                                  "aria-label": "account of current user",
                                  "aria-controls": S,
                                  "aria-haspopup": "true",
                                  onClick: O,
                                  color: "inherit",
                                  children: Object(N.jsx)(ne.a, {}),
                                }),
                              ],
                            }),
                            Object(N.jsx)("div", {
                              className: e.sectionMobile,
                              children: Object(N.jsx)(m.a, {
                                "aria-label": "show more",
                                "aria-controls": I,
                                "aria-haspopup": "true",
                                onClick: function (e) {
                                  b(e.currentTarget);
                                },
                                color: "inherit",
                                children: Object(N.jsx)(oe.a, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                      A,
                      C,
                    ],
                  }),
                  Object(N.jsxs)(de.a, {
                    className: e.drawer,
                    variant: "persistent",
                    anchor: "left",
                    open: y,
                    classes: { paper: e.drawerPaper },
                    children: [
                      Object(N.jsx)("div", {
                        className: e.drawerHeader,
                        children: Object(N.jsx)(m.a, {
                          onClick: function () {
                            k(!1);
                          },
                          children:
                            "ltr" === g.direction
                              ? Object(N.jsx)(me.a, {})
                              : Object(N.jsx)(xe.a, {}),
                        }),
                      }),
                      Object(N.jsx)(he.a, {}),
                      Object(N.jsx)(ue.a, {
                        children: [" "].map(function (e, t) {
                          return Object(N.jsxs)(
                            fe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(ge.a, {
                                  children: Object(N.jsx)("nav", {
                                    children: Object(N.jsx)(o.b, {
                                      to: "/home",
                                      className: "login",
                                      children: "COMPITION",
                                    }),
                                  }),
                                }),
                                Object(N.jsx)(ve.a, { primary: e }),
                              ],
                            },
                            e
                          );
                        }),
                      }),
                      Object(N.jsx)(ue.a, {
                        children: [" "].map(function (e, t) {
                          return Object(N.jsxs)(
                            fe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(ge.a, {
                                  children: Object(N.jsx)("nav", {
                                    children: Object(N.jsx)(o.b, {
                                      to: "/Admin",
                                      className: "login",
                                      children: "ADMIN",
                                    }),
                                  }),
                                }),
                                Object(N.jsx)(ve.a, { primary: e }),
                              ],
                            },
                            e
                          );
                        }),
                      }),
                      Object(N.jsx)(ue.a, {
                        children: [" "].map(function (e, t) {
                          return Object(N.jsxs)(
                            fe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(ge.a, {
                                  children: Object(N.jsx)("nav", {
                                    children: Object(N.jsx)(o.b, {
                                      to: "/Orders",
                                      className: "login",
                                      children: "Orders",
                                    }),
                                  }),
                                }),
                                Object(N.jsx)(ve.a, { primary: e }),
                              ],
                            },
                            e
                          );
                        }),
                      }),
                      Object(N.jsx)(ue.a, {
                        children: [" "].map(function (e, t) {
                          return Object(N.jsxs)(
                            fe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(ge.a, {
                                  children: Object(N.jsx)("nav", {
                                    children: Object(N.jsx)(o.b, {
                                      to: "/addBook",
                                      className: "login",
                                      children: "ADDBOOK",
                                    }),
                                  }),
                                }),
                                Object(N.jsx)(ve.a, { primary: e }),
                              ],
                            },
                            e
                          );
                        }),
                      }),
                      Object(N.jsx)(he.a, {}),
                      Object(N.jsx)(ue.a, {
                        children: ["All mail", "Trash", "Spam"].map(function (
                          e,
                          t
                        ) {
                          return Object(N.jsxs)(
                            fe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(ge.a, {
                                  children:
                                    t % 2 === 0
                                      ? Object(N.jsx)(we.a, {})
                                      : Object(N.jsx)(ae.a, {}),
                                }),
                                Object(N.jsx)(ve.a, { primary: e }),
                              ],
                            },
                            e
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Ce = n(100),
        Ie = function (e) {
          var t = e.children,
            n = Object(Ce.a)(e, ["children"]),
            a = Object(c.useContext)(Be),
            s = Object(r.a)(a, 2),
            i = s[0];
          s[1];
          return Object(N.jsx)(
            l.b,
            Object(q.a)(
              Object(q.a)({}, n),
              {},
              {
                render: function (e) {
                  var n = e.location;
                  return i.email
                    ? t
                    : Object(N.jsx)(l.a, {
                        to: { pathname: "/login", state: { from: n } },
                      });
                },
              }
            )
          );
        },
        Ae = function () {
          var e = Object(c.useContext)(Be),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = (t[1], Object(c.useState)([])),
            s = Object(r.a)(a, 2),
            i = s[0],
            o = s[1];
          return (
            Object(c.useEffect)(function () {
              fetch("http://localhost:5055/orders?email=" + n.email)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return o(e);
                });
            }, []),
            Object(N.jsx)("div", {
              children: Object(N.jsxs)("section", {
                className: "container-md",
                children: [
                  Object(N.jsxs)("div", {
                    className: "row mt-5 mb-5",
                    children: [
                      Object(N.jsx)("div", {
                        className: " col-4",
                        children: Object(N.jsx)("b", {
                          children: Object(N.jsx)("h3", {
                            children: "Book Name",
                          }),
                        }),
                      }),
                      Object(N.jsx)("div", {
                        className: " col-4",
                        children: Object(N.jsx)("b", {
                          children: Object(N.jsx)("h3", {
                            children: " Author Name",
                          }),
                        }),
                      }),
                      Object(N.jsx)("div", {
                        className: " col-4",
                        children: Object(N.jsx)("b", {
                          children: Object(N.jsx)("h3", { children: "Price" }),
                        }),
                      }),
                    ],
                  }),
                  i.map(function (e) {
                    var t, n;
                    return Object(N.jsxs)("div", {
                      className: "row text-justify",
                      children: [
                        Object(N.jsx)("p", {
                          className: "col-4",
                          children:
                            null === e ||
                            void 0 === e ||
                            null === (t = e.shipment) ||
                            void 0 === t
                              ? void 0
                              : t.bookName,
                        }),
                        Object(N.jsx)("p", {
                          className: "col-4",
                          children:
                            null === e || void 0 === e ? void 0 : e.name,
                        }),
                        Object(N.jsx)("p", {
                          className: "col-4",
                          children:
                            null === e ||
                            void 0 === e ||
                            null === (n = e.shipment) ||
                            void 0 === n
                              ? void 0
                              : n.cost,
                        }),
                      ],
                    });
                  }),
                ],
              }),
            })
          );
        },
        Be = Object(c.createContext)();
      var Ee = function () {
        var e = Object(c.useState)({}),
          t = Object(r.a)(e, 2),
          n = t[0],
          a = t[1];
        return Object(N.jsx)(Be.Provider, {
          value: [n, a],
          children: Object(N.jsxs)(o.a, {
            children: [
              Object(N.jsx)(Se, {}),
              Object(N.jsxs)(l.d, {
                children: [
                  Object(N.jsx)(l.b, {
                    path: "/home",
                    children: Object(N.jsx)(S, {}),
                  }),
                  Object(N.jsx)(Ie, {
                    path: "/Admin",
                    children: Object(N.jsx)(I, {}),
                  }),
                  Object(N.jsx)(Ie, {
                    path: "/addBook",
                    children: Object(N.jsx)(P, {}),
                  }),
                  Object(N.jsx)(l.b, {
                    path: "/login",
                    children: Object(N.jsx)(V, {}),
                  }),
                  Object(N.jsx)(Ie, {
                    path: "/book/:bookId",
                    children: Object(N.jsx)(z, {}),
                  }),
                  Object(N.jsx)(Ie, {
                    path: "/Orders",
                    children: Object(N.jsx)(Ae, {}),
                  }),
                  Object(N.jsx)(l.b, {
                    exact: !0,
                    path: "/",
                    children: Object(N.jsx)(S, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      n(150);
      i.a.render(
        Object(N.jsx)(a.a.StrictMode, { children: Object(N.jsx)(Ee, {}) }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[151, 1, 2]],
]);
//# sourceMappingURL=main.4fb6171c.chunk.js.map
