<a
  href={isDisabled ? "#" : "/your-target"}
  onClick={(e) => {
    if (isDisabled) {
      e.preventDefault(); // 🛑 block link if disabled
    } else {
      // ✅ optionally handle click logic here
    }
  }}
  aria-disabled={isDisabled}
  className={isDisabled ? "disabled-link" : ""}
>
  {isDisabled ? "Unavailable" : "Go to Details"}
</a>


.disabled-link {
    pointer-events: none;
    color: gray;
    text-decoration: none;
    cursor: not-allowed;
  }