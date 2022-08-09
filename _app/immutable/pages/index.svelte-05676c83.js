import {
	S as u,
	i as m,
	s as x,
	l as o,
	a as b,
	m as r,
	p as d,
	h as i,
	c as j,
	q as h,
	b as y,
	J as v,
	n as f
} from '../chunks/index-03969575.js';
function D(_) {
	let s, e, t, p, a;
	return {
		c() {
			(s = o('div')), (e = o('div')), (t = o('div')), (p = b()), (a = o('div')), this.h();
		},
		l(l) {
			s = r(l, 'DIV', { class: !0 });
			var n = d(s);
			e = r(n, 'DIV', { class: !0 });
			var c = d(e);
			(t = r(c, 'DIV', { class: !0 })),
				d(t).forEach(i),
				(p = j(c)),
				(a = r(c, 'DIV', { class: !0 })),
				d(a).forEach(i),
				c.forEach(i),
				n.forEach(i),
				this.h();
		},
		h() {
			h(t, 'class', 'flip-box-front svelte-n0hsjs'),
				h(a, 'class', 'flip-box-back svelte-n0hsjs'),
				h(e, 'class', 'flip-box-inner svelte-n0hsjs'),
				h(s, 'class', 'flip-box svelte-n0hsjs');
		},
		m(l, n) {
			y(l, s, n), v(s, e), v(e, t), v(e, p), v(e, a);
		},
		p: f,
		i: f,
		o: f,
		d(l) {
			l && i(s);
		}
	};
}
class I extends u {
	constructor(s) {
		super(), m(this, s, null, D, x, {});
	}
}
export { I as default };
