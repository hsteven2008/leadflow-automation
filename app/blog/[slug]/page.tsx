import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../page";
import CTASection from "@/components/CTASection";

// ── Static blog post content ─────────────────────────────────────────────────
// To add a new post: add an entry to the `posts` array in /app/blog/page.tsx,
// then add the post body to the `postContent` map below.
// ─────────────────────────────────────────────────────────────────────────────

const postContent: Record<string, React.ReactNode> = {
  "5-signs-your-small-business-needs-automation": (
    <article className="prose prose-gray max-w-none">
      <p className="lead text-xl text-gray-600 leading-relaxed mb-8">
        Most small business owners know they need to get more organized. But it can be hard to know
        exactly when a manual process has become a real problem — one that&apos;s costing you leads,
        time, and money. Here are five clear signs.
      </p>

      <h2>1. You keep losing track of leads</h2>
      <p>
        Someone fills out your contact form. You get an email. You mean to reply later — but &quot;later&quot;
        gets buried under twelve other emails, and three days pass. By the time you reach back out,
        they&apos;ve already hired someone else.
      </p>
      <p>
        If this has happened more than once, you don&apos;t have a discipline problem — you have a
        systems problem. A simple lead tracker connected to your contact form would capture every
        submission in a spreadsheet, send you an alert, and remind you who hasn&apos;t been contacted yet.
      </p>
      <p>
        <strong>The fix:</strong> A lead capture form connected to a Google Sheets tracker with follow-up date columns.
        LeadFlow Automation builds this starting at $299.
      </p>

      <h2>2. You send the same emails again and again</h2>
      <p>
        Every time someone contacts you, you write a version of the same email. &quot;Thanks for reaching
        out — here&apos;s what we need to get started...&quot; Every time you send a proposal, you copy and
        edit a template. Every time a new customer signs up, you manually send a welcome message.
      </p>
      <p>
        These tasks feel small individually. But if you&apos;re sending 5–10 of them a week, you&apos;re spending
        hours on work that should take minutes. Automation can handle every one of these — and do it
        faster and more consistently than you can.
      </p>
      <p>
        <strong>The fix:</strong> A form-to-email automation that sends a personalized confirmation
        within seconds of every new submission — no manual work required.
      </p>

      <h2>3. Your spreadsheet is becoming hard to manage</h2>
      <p>
        You started with a simple spreadsheet to track customers or leads. Now it has 400 rows, seven
        people editing it at once, columns that nobody remembers the purpose of, and no reliable way
        to see what actually needs attention.
      </p>
      <p>
        A messy spreadsheet isn&apos;t a sign that spreadsheets don&apos;t work — it&apos;s a sign that yours needs
        structure. A clean CRM setup in Google Sheets or Airtable, with proper columns, status
        tracking, and filters, can completely transform how useful that data is.
      </p>
      <p>
        <strong>The fix:</strong> A Google Sheets CRM rebuild with proper lead stages, follow-up dates,
        and status tracking — so your team always knows what to do next.
      </p>

      <h2>4. Customers wait too long for responses</h2>
      <p>
        Response time matters more than most business owners realize. Studies consistently show that
        leads contacted within 5 minutes of submitting a form are far more likely to convert than
        those contacted an hour later — let alone a day later.
      </p>
      <p>
        If your response depends on someone checking their inbox, you&apos;re slower than you should be.
        Automation can send an acknowledgment instantly — which buys goodwill, sets expectations, and
        keeps the lead warm while you get back to them with the real response.
      </p>
      <p>
        <strong>The fix:</strong> A client intake automation that sends an instant confirmation email
        the moment someone submits a request.
      </p>

      <h2>5. You don&apos;t know what needs follow-up right now</h2>
      <p>
        If I asked you right now: &quot;Who in your pipeline hasn&apos;t been contacted in the last 5 days?&quot;
        — could you answer in 30 seconds? If the answer is no (or &quot;I&apos;d have to go check&quot;), you
        don&apos;t have clear visibility into your leads.
      </p>
      <p>
        A follow-up reminder system solves this by checking your lead tracker every morning and
        sending you a digest of anyone who&apos;s overdue for contact. No more forgotten leads. No more
        manually scanning through rows.
      </p>
      <p>
        <strong>The fix:</strong> An automated daily digest that surfaces overdue follow-ups from your
        Google Sheet straight to your inbox every morning.
      </p>

      <h2>The bottom line</h2>
      <p>
        Automation isn&apos;t about replacing people — it&apos;s about removing the manual steps that slow you
        down and cause things to fall through the cracks. If any of these five signs sound familiar,
        a simple automation setup could save you hours each week and recover leads you&apos;re currently losing.
      </p>
      <p>
        LeadFlow Automation builds practical systems for small businesses — starting at $299 for a
        single workflow. No complicated software. No enterprise pricing.
      </p>
    </article>
  ),

  "google-sheets-crm-save-lost-leads": (
    <article className="prose prose-gray max-w-none">
      <p className="lead text-xl text-gray-600 leading-relaxed mb-8">
        You don&apos;t need Salesforce to stop losing customers. For most small businesses with 1–20 people,
        a well-structured Google Sheets CRM — connected to simple automation — is all you need to stay
        organized and follow up consistently.
      </p>

      <h2>Why small businesses lose leads in the first place</h2>
      <p>
        The most common reason small businesses lose leads isn&apos;t a lack of effort — it&apos;s a lack of
        visibility. Leads arrive from different places: your website contact form, a phone call, an
        email, a referral from a client. Each one gets handled slightly differently. Some get logged.
        Most don&apos;t. And without a single place to see all of them, things slip.
      </p>
      <p>
        The second most common reason is no follow-up system. Someone expresses interest, you respond
        once, and then life gets busy. You lose track of whether they replied. You don&apos;t know if it&apos;s
        been three days or three weeks. By the time you think of them again, they&apos;ve moved on.
      </p>

      <h2>Why Google Sheets is a good starting point</h2>
      <p>
        Google Sheets is free, your team already knows how to use it, and it connects to almost every
        automation tool on the market — Zapier, Make, n8n, and dozens of others. It doesn&apos;t require
        any training, any subscription, or any IT support to set up.
      </p>
      <p>
        For a team under 20 people that doesn&apos;t have complex sales pipelines with hundreds of stages,
        a Google Sheets CRM can handle everything a paid CRM does — it just needs to be set up the
        right way.
      </p>

      <h2>What a simple CRM should include</h2>
      <p>At minimum, a useful CRM needs these columns:</p>
      <ul>
        <li><strong>Name and contact info</strong> — so you can actually reach them</li>
        <li><strong>Lead source</strong> — where did they come from?</li>
        <li><strong>Date added</strong> — when did they first come in?</li>
        <li><strong>Status</strong> — New, Contacted, Proposal Sent, Won, Lost, Not a Fit</li>
        <li><strong>Next action</strong> — what needs to happen next?</li>
        <li><strong>Follow-up date</strong> — by when?</li>
        <li><strong>Notes</strong> — any relevant details from calls or emails</li>
      </ul>
      <p>
        The status column is the most important piece. It gives you a filter — you can instantly see
        all leads at any stage without scrolling through hundreds of rows.
      </p>

      <h2>How automation makes it better</h2>
      <p>
        A Google Sheet CRM on its own is useful. Connected to automation, it becomes a real system.
        Here&apos;s what&apos;s possible:
      </p>
      <ul>
        <li>Form submissions → automatically added as new rows with status &quot;New&quot;</li>
        <li>New row added → automatic confirmation email sent to the lead</li>
        <li>Follow-up date passes without status change → automated reminder sent to your inbox</li>
        <li>Status updated to &quot;Won&quot; → automatic welcome email sent to customer</li>
      </ul>
      <p>
        Every one of these can be set up with Zapier or Make without any coding. Once it&apos;s running,
        it works in the background without you thinking about it.
      </p>

      <h2>When to upgrade to a custom dashboard</h2>
      <p>
        A Google Sheets CRM is the right starting point for most small businesses. But there are
        signs it may be time for something more:
      </p>
      <ul>
        <li>More than 5–10 people editing the same sheet regularly</li>
        <li>You need role-based access (some people should only see certain records)</li>
        <li>You want a cleaner interface that doesn&apos;t look like a spreadsheet</li>
        <li>You need to track complex relationships (customers + jobs + invoices + vendors)</li>
      </ul>
      <p>
        At that point, a lightweight web-based dashboard or a custom mini CRM might make more sense.
        LeadFlow Automation builds both — and can help you start with Sheets and migrate later when
        you&apos;re ready.
      </p>

      <h2>The bottom line</h2>
      <p>
        A Google Sheets CRM isn&apos;t a compromise — for most small businesses, it&apos;s the right tool. It&apos;s
        free, familiar, flexible, and works with every automation platform you&apos;d want to use.
      </p>
      <p>
        The key is setting it up properly from the start: the right columns, the right statuses, and
        the right automations to keep it updated without manual effort.
      </p>
      <p>
        LeadFlow Automation builds Google Sheets CRM setups starting at $299. If you&apos;re currently
        managing leads in a messy spreadsheet or scattered across emails, it&apos;s the fastest way to
        get organized.
      </p>
    </article>
  ),
  "stop-losing-leads-from-contact-form": (
    <article className="prose prose-gray max-w-none">
      <p className="lead text-xl text-gray-600 leading-relaxed mb-8">
        Most small businesses have a contact form on their website. Most of those forms are silently
        losing leads every week — not because of bad traffic, but because of what happens (or doesn&apos;t
        happen) after someone submits.
      </p>

      <h2>The typical contact form setup</h2>
      <p>
        Someone finds your website, fills out your contact form, and hits submit. What happens next?
        In most cases: an email lands in your inbox. Maybe you see it that day. Maybe you see it two
        days later. Maybe it gets buried under ten other emails and you don&apos;t see it at all.
      </p>
      <p>
        Meanwhile, the person who submitted the form has no idea if you received it. They get no
        confirmation. No acknowledgment. No estimated response time. They&apos;re just left waiting —
        and the longer they wait, the more likely they are to call someone else.
      </p>

      <h2>Why this costs you real money</h2>
      <p>
        Research on lead response time consistently shows the same thing: the first business to
        respond wins most of the time. A lead who gets a reply within minutes is far more likely to
        convert than one who gets a reply the next morning — even if your price and service are
        identical.
      </p>
      <p>
        Speed signals that you&apos;re organized, responsive, and professional. Silence signals the
        opposite — even if you&apos;re just busy with other work and fully intend to reply.
      </p>
      <p>
        If your contact form is getting even five or ten submissions a month, losing two or three of
        those to slow response times adds up quickly. For a $300–$500 service, that&apos;s potentially
        thousands of dollars in missed revenue per year — from leads who already came to you.
      </p>

      <h2>The three most common failure points</h2>
      <p>
        Most contact form setups fail in one of three ways:
      </p>
      <ul>
        <li>
          <strong>The submission goes to a shared inbox nobody monitors closely.</strong> Leads sit
          there for hours or days before someone notices. By then, the urgency is gone.
        </li>
        <li>
          <strong>There&apos;s no confirmation email to the person who submitted.</strong> They don&apos;t
          know if the form worked. They submitted and heard nothing. Half of them assume it broke
          and move on.
        </li>
        <li>
          <strong>There&apos;s no system for tracking submissions.</strong> If you get five inquiries in
          a week and only follow up on three, the other two disappear — and you have no record that
          they ever existed.
        </li>
      </ul>

      <h2>What a simple fix looks like</h2>
      <p>
        Fixing this doesn&apos;t require expensive software or a complicated setup. The goal is to make
        sure three things happen automatically the moment someone submits your form:
      </p>
      <ul>
        <li>The lead gets an immediate confirmation so they know their message was received</li>
        <li>You get an alert in whatever channel you actually check — email, text, or Slack</li>
        <li>The submission gets logged somewhere you can review it — a spreadsheet, a tracker, or a simple dashboard</li>
      </ul>
      <p>
        When those three things happen automatically, you&apos;re no longer dependent on checking your
        inbox at the right moment. The system catches every lead. You respond when you&apos;re ready —
        and the lead already knows you received their message.
      </p>

      <h2>The difference it makes</h2>
      <p>
        Business owners who set this up consistently report the same experience: they stop worrying
        about whether leads are slipping through, because they know every single one is captured.
        They can review a clean list of open inquiries instead of digging through their inbox. And
        their response rate goes up — not because they&apos;re working harder, but because the system
        makes it easier to stay on top of things.
      </p>
      <p>
        It&apos;s not a dramatic transformation. It&apos;s a simple layer of automation that makes sure the
        work you&apos;ve already done — building a website, attracting visitors, getting them to submit —
        actually results in a conversation.
      </p>

      <h2>The bottom line</h2>
      <p>
        If you have a contact form and no automated follow-up system behind it, you are losing leads.
        Not sometimes — regularly. The fix is straightforward and doesn&apos;t require changing your
        website or learning new software.
      </p>
      <p>
        LeadFlow Automation sets up lead capture and notification systems for small businesses
        starting at $299. If your contact form submissions are going into a black hole, this is the
        fastest way to stop the bleeding.
      </p>
    </article>
  ),

  "why-follow-up-reminders-matter": (
    <article className="prose prose-gray max-w-none">
      <p className="lead text-xl text-gray-600 leading-relaxed mb-8">
        Most small business owners know they should follow up more. Most of them don&apos;t — not because
        they don&apos;t care, but because there&apos;s no system reminding them to do it. The result is a
        pipeline full of leads that quietly went cold.
      </p>

      <h2>The follow-up problem most businesses don&apos;t talk about</h2>
      <p>
        Here&apos;s a scenario that plays out in small businesses every week: A potential customer reaches
        out. You respond. They say &quot;sounds good, let me think about it&quot; or &quot;I&apos;ll get back to you.&quot;
        You move on to the next thing. A week passes. Then two weeks. You think about them briefly,
        tell yourself you&apos;ll send a follow-up tomorrow — and tomorrow never comes.
      </p>
      <p>
        Meanwhile, they&apos;ve hired someone else. Not because your service was worse. Not because your
        price was too high. Simply because the other business followed up and you didn&apos;t.
      </p>

      <h2>Why most follow-ups don&apos;t happen</h2>
      <p>
        It&apos;s not laziness. It&apos;s that following up requires remembering — and remembering requires a
        system. When leads are scattered across your inbox, your notes app, a sticky note on your
        desk, and your memory, there&apos;s no reliable way to know who needs a follow-up today.
      </p>
      <p>
        You&apos;re not going to check five different places every morning. Nobody does. So the follow-ups
        that should happen don&apos;t — and the leads that could have converted go cold.
      </p>

      <h2>What the data says about follow-up timing</h2>
      <p>
        Sales research has consistently shown that most deals close after multiple follow-ups — yet
        most small businesses stop after one. The leads that don&apos;t respond immediately aren&apos;t
        necessarily uninterested. They&apos;re busy. They forgot. They got distracted. A well-timed
        follow-up at the right moment is often all it takes to get a response.
      </p>
      <p>
        The businesses that follow up consistently — not aggressively, just persistently — win more
        of those conversations. The ones that don&apos;t follow up hand those deals to whoever does.
      </p>

      <h2>What a follow-up reminder system actually does</h2>
      <p>
        A follow-up reminder system is simple in concept: it watches your lead tracker and tells you
        when someone is overdue for contact. That&apos;s it. No AI, no complicated software — just a
        reliable nudge at the right time.
      </p>
      <p>
        In practice, it looks like this: every morning, you get a short list in your inbox —
        &quot;These three leads haven&apos;t been contacted in 5+ days.&quot; You look at the list, pick up your
        phone or open your email, and follow up. The system doesn&apos;t do the follow-up for you — it
        just makes sure you never forget who needs one.
      </p>
      <p>
        For small businesses that deal with a handful of leads per week, this is often all the
        difference between closing jobs and watching them go to a competitor.
      </p>

      <h2>The compounding effect over time</h2>
      <p>
        The real value of a follow-up reminder system isn&apos;t any single recovered lead — it&apos;s the
        cumulative effect over months. If you close even one additional job per month that would
        have otherwise gone cold, and your average job is worth $500–$1,000, that&apos;s $6,000–$12,000
        per year from a system that takes a few minutes a day to act on.
      </p>
      <p>
        More importantly, consistent follow-up builds a reputation. Customers remember when you
        stayed in touch, when you didn&apos;t let them fall through the cracks. That turns into repeat
        business and referrals — the most reliable source of new work for any small business.
      </p>

      <h2>The bottom line</h2>
      <p>
        If you&apos;re currently managing leads in an inbox or a messy spreadsheet, you&apos;re missing
        follow-ups. Not occasionally — regularly. The problem isn&apos;t your work ethic; it&apos;s that
        there&apos;s nothing reminding you who needs attention today.
      </p>
      <p>
        LeadFlow Automation builds follow-up reminder systems as part of every lead tracker setup,
        starting at $299. If you want to stop losing jobs to competitors who simply followed up
        faster, this is where to start.
      </p>
    </article>
  ),
};

// Fallback for posts without full content
const defaultContent = (title: string, desc: string) => (
  <article className="prose prose-gray max-w-none">
    <p className="lead text-xl text-gray-600 leading-relaxed mb-8">{desc}</p>
    <p>Full article coming soon. In the meantime, <Link href="/contact" className="text-blue-600 hover:underline">get in touch</Link> if you have questions about this topic.</p>
  </article>
);

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug] ?? defaultContent(post.title, post.description);

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
              ← Blog
            </Link>
            <span className="text-gray-600">·</span>
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">{post.title}</h1>
          <p className="text-gray-300 text-lg">{post.description}</p>
          <p className="text-gray-500 text-sm mt-3">{post.date} · LeadFlow Automation</p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-max max-w-3xl mx-auto">
          {content}

          {/* Inline CTA */}
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to fix this for your business?</h3>
            <p className="text-gray-600 mb-4">
              Get a free automation idea tailored to your business type and biggest problem.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Idea →
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <div key={p.slug} className="card">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-1 text-sm leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-xs mb-3">{p.readTime}</p>
                  <Link href={`/blog/${p.slug}`} className="text-blue-600 text-sm font-semibold hover:underline">
                    Read →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
