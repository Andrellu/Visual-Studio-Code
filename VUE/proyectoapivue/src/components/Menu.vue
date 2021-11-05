<template>
    <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">APIS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/coches">Coches</router-link>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleadosdetalles">Detalles Empleado</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleadosoficios">Oficios Empleado</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Empleados</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li><a class="dropdown-item" href="#">Gomez</a></li>
              <li><a class="dropdown-item" href="#">Otero</a></li>
              <li><a class="dropdown-item" href="#">Ramos</a></li>
            </ul>
          </li>
        </ul>
        <form>
          <input
            class="form-control"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
          />
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name : "Menu"
}
</script>
