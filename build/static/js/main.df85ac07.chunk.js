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
        i = n(12),
        s = n.n(i),
        r = (n(113), n(9)),
        o = (n(114), n(19)),
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
        f = n(62),
        g = n(92),
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
      function k(e) {
        var t,
          n,
          c = e.book,
          a = w(),
          i = Object(l.g)(),
          s = c._id,
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
              src: "/images/".concat(s, ".png"),
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
                    return (e = s), void i.push("/book/".concat(e));
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
      var y = n(203),
        S = function () {
          var e = Object(c.useState)([]),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = t[1];
          return (
            Object(c.useEffect)(function () {
              fetch("https://quiet-springs-03889.herokuapp.com/events")
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
                      Object(N.jsx)(y.a, { className: "text-center mt-5" }),
                    n.map(function (e) {
                      return Object(N.jsx)(k, { book: e }, e._id);
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
            i = n.author;
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
                  children: Object(N.jsx)("p", { children: i }),
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
                          "https://enigmatic-basin-74595.herokuapp.com/deleteEvent/".concat(
                            e
                          ),
                          { method: "DELETE" }
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {})
                      );
                      var e;
                    },
                    className: "btn btn-primary",
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
                fetch("https://quiet-springs-03889.herokuapp.com/events")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return a(e);
                  });
              }, []),
              Object(N.jsxs)(N.Fragment, {
                children: [
                  Object(N.jsx)(o.b, {
                    to: "/addBook",
                    className: "addMin mt-5 d-inline-block",
                    children: "Add Product",
                  }),
                  Object(N.jsx)("br", {}),
                  Object(N.jsx)(o.b, {
                    to: "/Admin",
                    className: "addMin mt-5 d-inline-block",
                    children: "Manage books",
                  }),
                  Object(N.jsxs)("section", {
                    className: "container-md",
                    children: [
                      Object(N.jsx)("br", {}),
                      Object(N.jsx)("br", {}),
                      Object(N.jsxs)("div", {
                        className: "row container-md",
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
                        className: "row",
                        children: [
                          0 === n.length &&
                            Object(N.jsx)(y.a, {
                              className: "text-center mt-5",
                            }),
                          n.map(function (e) {
                            return Object(N.jsx)(C, { book: e });
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
        A = n(93),
        B = n.n(A),
        E = n(61),
        P =
          (n(142),
          function () {
            var e = Object(E.a)(),
              t = e.register,
              n = e.handleSubmit,
              a = (e.watch, e.errors, Object(c.useState)(null)),
              i = Object(r.a)(a, 2),
              s = i[0],
              o = i[1];
            return Object(N.jsxs)("div", {
              className: "container-md mt-5",
              children: [
                Object(N.jsx)("h1", {
                  className: "mt-5 mb-5",
                  children: "Add Book",
                }),
                Object(N.jsxs)("form", {
                  onSubmit: n(function (e) {
                    var t = { imageURL: s, AddEvents: e };
                    fetch(
                      "https://quiet-springs-03889.herokuapp.com/addEvent",
                      {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(t),
                      }
                    ).then(function (e) {
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
                          className: "col-3 same-desgine",
                          name: "cost",
                          placeholder: "price",
                          ref: t({ required: !0 }),
                        }),
                        Object(N.jsx)("input", {
                          className: "col-3 same-desgine",
                          name: "pdf",
                          type: "file",
                          ref: t({ required: !0 }),
                        }),
                        Object(N.jsx)("br", {}),
                        Object(N.jsx)("input", {
                          className: "col-6",
                          name: "exampleRequired",
                          type: "file",
                          onChange: function (e) {
                            var t = new FormData();
                            t.set("key", "6cab7d7b5a429ce36568881d7a7f7081"),
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
        D = (n(143), n(29)),
        L =
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
          D.a
            .auth()
            .currentUser.updateProfile({ displayName: e })
            .then(function () {
              console.log("user name updated successfully");
            })
            .catch(function (e) {
              console.log(e);
            });
        },
        W = n(63),
        T = n(64);
      var F = function () {
          var e = Object(c.useState)(!1),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = t[1],
            i = Object(c.useState)({
              isSignIn: !1,
              newUser: !1,
              name: "",
              email: "",
              photo: "",
              password: "",
            }),
            s = Object(r.a)(i, 2),
            o = s[0],
            j = s[1];
          0 === D.a.apps.length && D.a.initializeApp(L);
          var d = Object(l.g)(),
            b = (Object(l.h)().state || { from: { pathname: "/" } }).from,
            u = Object(c.useContext)(Ae),
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
              Object(N.jsx)("section", {
                className: " container-md text-center loginAndSignUp mt-5",
                id: "main",
                children: Object(N.jsxs)("div", {
                  className: " container-md mt-5",
                  id: "main",
                  children: [
                    n
                      ? Object(N.jsx)("h1", { children: "Create an account" })
                      : Object(N.jsx)("h1", { children: "Login" }),
                    Object(N.jsxs)("form", {
                      onSubmit: function (e) {
                        var t, c, a;
                        n &&
                          o.email &&
                          o.password &&
                          ((t = o.name),
                          (c = o.email),
                          (a = o.password),
                          D.a
                            .auth()
                            .createUserWithEmailAndPassword(c, a)
                            .then(function (e) {
                              var n = e.user;
                              return (n.error = ""), (n.success = !0), M(t), n;
                            })
                            .catch(function (e) {
                              var t = {};
                              return (t.error = e.message), (t.success = !1), t;
                            })).then(function (e) {
                            j(e), O(e), d.replace(b);
                          }),
                          !n &&
                            o.email &&
                            o.password &&
                            (function (e, t) {
                              return D.a
                                .auth()
                                .signInWithEmailAndPassword(e, t)
                                .then(function (e) {
                                  var t = e.user;
                                  return (t.error = ""), (t.success = !0), t;
                                })
                                .catch(function (e) {
                                  var t = {};
                                  return (
                                    (t.error = e.message), (t.success = !1), t
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
                          }),
                        Object(N.jsx)("br", {}),
                        Object(N.jsx)("input", {
                          type: "text",
                          onBlur: p,
                          placeholder: "Your email address",
                          required: !0,
                          name: "email",
                        }),
                        Object(N.jsx)("br", {}),
                        Object(N.jsx)("input", {
                          type: "password",
                          id: "txtPassword",
                          onBlur: p,
                          name: "password",
                          placeholder: "Your password",
                          required: !0,
                        }),
                        Object(N.jsx)("br", {}),
                        n &&
                          Object(N.jsx)("input", {
                            id: "txtConfirmPassword",
                            type: "password",
                            onBlur: p,
                            placeholder: "Confirm password",
                            required: !0,
                            name: "Confirmpassword",
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
                          type: "submit",
                          value: n ? "sign up" : "sign in",
                          className: "signupSignInBtn",
                        }),
                        Object(N.jsx)("br", {}),
                        n
                          ? Object(N.jsx)("p", {})
                          : Object(N.jsxs)("b", {
                              className: "d-inline-block",
                              children: [
                                "Dont have an account?",
                                Object(N.jsx)("p", {
                                  onClick: function () {
                                    return a(!n);
                                  },
                                  className: "d-inline-block text-danger",
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
                  ],
                }),
              }),
              Object(N.jsxs)("div", {
                className: "text-center mt-5 GoogleFbSignIn",
                children: [
                  o.isSignIn
                    ? Object(N.jsxs)("button", {
                        onClick: function () {
                          D.a
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
                          Object(N.jsx)(W.a, { icon: T.b }),
                          "sign out",
                        ],
                      })
                    : Object(N.jsxs)("button", {
                        onClick: function () {
                          (function () {
                            var e = new D.a.auth.GoogleAuthProvider();
                            return D.a
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
                                console.log(e), console.log(e.message);
                              });
                          })().then(function (e) {
                            m(e, !0);
                          });
                        },
                        children: [
                          Object(N.jsx)(W.a, { icon: T.b }),
                          "sign in With Google",
                        ],
                      }),
                  Object(N.jsx)("br", {}),
                  Object(N.jsxs)("button", {
                    onClick: function () {
                      (function () {
                        var e = new D.a.auth.FacebookAuthProvider();
                        return D.a
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
                    children: [
                      Object(N.jsx)(W.a, { icon: T.a }),
                      "Sign in using Facebook",
                      " ",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        R =
          (n(148),
          function () {
            var e,
              t,
              n = Object(l.i)().bookId,
              a = Object(c.useState)([]),
              i = Object(r.a)(a, 2),
              s = i[0],
              o = i[1],
              j = Object(c.useState)(!1),
              d = Object(r.a)(j, 2),
              b = d[0],
              u = d[1],
              h = Object(c.useContext)(Ae),
              O = Object(r.a)(h, 2),
              m = O[0],
              p = (O[1], Object(E.a)()),
              x = p.register,
              f = p.handleSubmit,
              g = (p.watch, Object(c.useState)([])),
              v = Object(r.a)(g, 2),
              w = v[0],
              k = v[1];
            Object(c.useEffect)(function () {
              fetch("https://quiet-springs-03889.herokuapp.com/events")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return k(e);
                });
            }, []);
            var y =
              null === w || void 0 === w
                ? void 0
                : w.find(function (e) {
                    return (null === e || void 0 === e ? void 0 : e._id) === n;
                  });
            return (
              Object(c.useEffect)(function () {
                fetch(
                  "https://quiet-springs-03889.herokuapp.com/orders?email=" +
                    m.email
                )
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
                        s.map(function (e) {
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
                              fetch(
                                "https://quiet-springs-03889.herokuapp.com/addOrder",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(t),
                                }
                              )
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
                                  null === y || void 0 === y ? void 0 : y._id,
                                ref: x({ required: !0 }),
                                placeholder: "book cost",
                              }),
                              Object(N.jsx)("input", {
                                className: " col-4 text-center",
                                readOnly: !0,
                                name: "bookName",
                                defaultValue:
                                  null === y ||
                                  void 0 === y ||
                                  null === (e = y.AddEvents) ||
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
                                  null === y ||
                                  void 0 === y ||
                                  null === (t = y.AddEvents) ||
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
        V = (n(149), n.p + "static/media/logo.29290f88.png"),
        z = n(16),
        G = n(208),
        _ = n(209),
        J = n(214),
        Q = n(206),
        Y = n(205),
        H = n(215),
        K = n(95),
        X = n.n(K),
        $ = n(96),
        Z = n.n($),
        ee = n(73),
        te = n.n(ee),
        ne = n(53),
        ce = n.n(ne),
        ae = n(72),
        ie = n.n(ae),
        se = n(97),
        re = n.n(se),
        oe = n(5),
        le = n(34),
        je = n(216),
        de = n(207),
        be = n(204),
        ue = n(210),
        he = n(98),
        Oe = n.n(he),
        me = n(99),
        pe = n.n(me),
        xe = n(153),
        fe = n(211),
        ge = n(212),
        ve = n(74),
        Ne = n.n(ve),
        we = 240,
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
                backgroundColor: Object(z.b)(e.palette.common.white, 0.15),
                "&:hover": {
                  backgroundColor: Object(z.b)(e.palette.common.white, 0.25),
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
                width: "calc(100% - ".concat(we, "px)"),
                marginLeft: we,
                transition: e.transitions.create(["margin", "width"], {
                  easing: e.transitions.easing.easeOut,
                  duration: e.transitions.duration.enteringScreen,
                }),
              }),
              Object(U.a)(t, "hide", { display: "none" }),
              Object(U.a)(t, "drawer", { width: we, flexShrink: 0 }),
              Object(U.a)(t, "drawerPaper", { width: we }),
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
        ye = function () {
          var e = ke(),
            t = a.a.useState(null),
            n = Object(r.a)(t, 2),
            i = n[0],
            s = n[1],
            l = a.a.useState(null),
            j = Object(r.a)(l, 2),
            d = j[0],
            b = j[1],
            u = Boolean(i),
            h = Boolean(d),
            O = function (e) {
              s(e.currentTarget);
            },
            p = function () {
              b(null);
            },
            f = function () {
              s(null), p();
            },
            g = Object(le.a)(),
            v = a.a.useState(!1),
            w = Object(r.a)(v, 2),
            k = w[0],
            y = w[1],
            S = "primary-search-account-menu",
            C = Object(N.jsxs)(H.a, {
              anchorEl: i,
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
                        children: Object(N.jsx)(ce.a, {}),
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
                      children: Object(N.jsx)(te.a, {}),
                    }),
                    Object(N.jsx)("p", { children: "Profile" }),
                  ],
                }),
              ],
            }),
            B = Object(c.useContext)(Ae),
            E = Object(r.a)(B, 2),
            P = E[0];
          E[1];
          return (
            console.log(P.photo),
            Object(N.jsx)(N.Fragment, {
              children: Object(N.jsxs)("div", {
                className: (e.grow, e.root),
                children: [
                  Object(N.jsx)(de.a, {}),
                  Object(N.jsx)(G.a, {
                    position: "fixed",
                    className: Object(oe.a)(
                      e.appBar,
                      Object(U.a)({}, e.appBarShift, k)
                    ),
                    id: "navbar2",
                    children: " ",
                  }),
                  Object(N.jsxs)(_.a, {
                    children: [
                      Object(N.jsx)(G.a, {
                        position: "fixed",
                        id: "navbar",
                        children: Object(N.jsxs)(_.a, {
                          id: "navbar",
                          children: [
                            Object(N.jsx)(m.a, {
                              color: "inherit",
                              "aria-label": "open drawer",
                              onClick: function () {
                                y(!0);
                              },
                              edge: "start",
                              className: Object(oe.a)(
                                e.menuButton,
                                k && e.hide
                              ),
                              children: Object(N.jsx)(X.a, {}),
                            }),
                            Object(N.jsx)("img", {
                              src: V,
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
                                  children: Object(N.jsx)(Z.a, {}),
                                }),
                                Object(N.jsx)(J.a, {
                                  placeholder: "Search\u2026",
                                  classes: {
                                    root: e.inputRoot,
                                    input: e.inputInput,
                                  },
                                  inputProps: { "aria-label": "search" },
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
                                    children: Object(N.jsx)(ce.a, {}),
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
                                  children: Object(N.jsx)(te.a, {}),
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
                                children: Object(N.jsx)(re.a, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                      A,
                      C,
                    ],
                  }),
                  Object(N.jsxs)(je.a, {
                    className: e.drawer,
                    variant: "persistent",
                    anchor: "left",
                    open: k,
                    classes: { paper: e.drawerPaper },
                    children: [
                      Object(N.jsx)("div", {
                        className: e.drawerHeader,
                        children: Object(N.jsx)(m.a, {
                          onClick: function () {
                            y(!1);
                          },
                          children:
                            "ltr" === g.direction
                              ? Object(N.jsx)(Oe.a, {})
                              : Object(N.jsx)(pe.a, {}),
                        }),
                      }),
                      Object(N.jsx)(ue.a, {}),
                      Object(N.jsx)(be.a, {
                        children: [
                          "Inbox",
                          "Starred",
                          "Send email",
                          "Drafts",
                        ].map(function (e, t) {
                          return Object(N.jsxs)(
                            xe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(fe.a, {
                                  children:
                                    t % 2 === 0
                                      ? Object(N.jsx)(Ne.a, {})
                                      : Object(N.jsx)(ce.a, {}),
                                }),
                                Object(N.jsx)(ge.a, { primary: e }),
                              ],
                            },
                            e
                          );
                        }),
                      }),
                      Object(N.jsx)(ue.a, {}),
                      Object(N.jsx)(be.a, {
                        children: ["All mail", "Trash", "Spam"].map(function (
                          e,
                          t
                        ) {
                          return Object(N.jsxs)(
                            xe.a,
                            {
                              button: !0,
                              children: [
                                Object(N.jsx)(fe.a, {
                                  children:
                                    t % 2 === 0
                                      ? Object(N.jsx)(Ne.a, {})
                                      : Object(N.jsx)(ce.a, {}),
                                }),
                                Object(N.jsx)(ge.a, { primary: e }),
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
        Se = n(100),
        Ce = function (e) {
          var t = e.children,
            n = Object(Se.a)(e, ["children"]),
            a = Object(c.useContext)(Ae),
            i = Object(r.a)(a, 2),
            s = i[0];
          i[1];
          return Object(N.jsx)(
            l.b,
            Object(q.a)(
              Object(q.a)({}, n),
              {},
              {
                render: function (e) {
                  var n = e.location;
                  return s.email
                    ? t
                    : Object(N.jsx)(l.a, {
                        to: { pathname: "/login", state: { from: n } },
                      });
                },
              }
            )
          );
        },
        Ie = function () {
          var e = Object(c.useContext)(Ae),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = (t[1], Object(c.useState)([])),
            i = Object(r.a)(a, 2),
            s = i[0],
            o = i[1];
          return (
            Object(c.useEffect)(function () {
              fetch(
                "https://quiet-springs-03889.herokuapp.com/orders?email=" +
                  n.email
              )
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
                  s.map(function (e) {
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
        Ae = Object(c.createContext)();
      var Be = function () {
        var e = Object(c.useState)({}),
          t = Object(r.a)(e, 2),
          n = t[0],
          a = t[1];
        return Object(N.jsx)(Ae.Provider, {
          value: [n, a],
          children: Object(N.jsxs)(o.a, {
            children: [
              Object(N.jsx)(ye, {}),
              Object(N.jsxs)(l.d, {
                children: [
                  Object(N.jsx)(l.b, {
                    path: "/home",
                    children: Object(N.jsx)(S, {}),
                  }),
                  Object(N.jsx)(Ce, {
                    path: "/Admin",
                    children: Object(N.jsx)(I, {}),
                  }),
                  Object(N.jsx)(Ce, {
                    path: "/addBook",
                    children: Object(N.jsx)(P, {}),
                  }),
                  Object(N.jsx)(l.b, {
                    path: "/login",
                    children: Object(N.jsx)(F, {}),
                  }),
                  Object(N.jsx)(Ce, {
                    path: "/book/:bookId",
                    children: Object(N.jsx)(R, {}),
                  }),
                  Object(N.jsx)(Ce, {
                    path: "/Orders",
                    children: Object(N.jsx)(Ie, {}),
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
      s.a.render(
        Object(N.jsx)(a.a.StrictMode, { children: Object(N.jsx)(Be, {}) }),
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
//# sourceMappingURL=main.df85ac07.chunk.js.map
