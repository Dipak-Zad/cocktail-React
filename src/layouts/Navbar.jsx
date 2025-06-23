const Navbar = () =>
{
    return  <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                Cosmic Elixir</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bar
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Cocktails</a></li>
                        <li><a class="dropdown-item" href="#">Spirits</a></li>
                        <li><a class="dropdown-item" href="#">Beer & Wines</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Service
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Recipes</a></li>
                        <li><a class="dropdown-item" href="#">Barware</a></li>
                        <li><a class="dropdown-item" href="#">Tips & Tricks</a></li>
                        <li><a class="dropdown-item" href="#">Membership</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </>
}

export default Navbar;

