export default function NewsletterForm() {
  return (
    <form method="post" className="form-newsletter">
      <input type="email" placeholder="Enter your e-mail" />
      <button type="submit" className="btn-submit-newsletter">
        I'm in!
      </button>
    </form>
  );
}
