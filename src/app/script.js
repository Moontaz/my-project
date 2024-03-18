function simpleScript() {
  document.getElementById("gender").addEventListener("change", function () {
    var gender = this.value;
    var hamilOrMenyusuiDiv = document.getElementById("hamilOrMenyusui");
    var umurHamilOrMenyusuiDiv = document.getElementById("umurHamilOrMenyusui");

    if (gender === "") {
      document.getElementById("submitButton").classList.add("hidden");
    } else if (gender === "laki-laki") {
      document.getElementById("submitButton").classList.remove("hidden");
      hamilOrMenyusuiDiv.innerHTML = "";
      umurHamilOrMenyusuiDiv.innerHTML = "";
    } else if (gender === "perempuan") {
      submitButton.classList.add("hidden");
      hamilOrMenyusuiDiv.innerHTML = `
    <label class="mt-3">Hamil atau Menyusui?</label>
    <select class="form-control mt-2" id="hamilMenyusui" name="hamilMenyusui" required>
      <option value="">Pilih</option>
      <option value="hamil">Hamil</option>
      <option value="menyusui">Menyusui</option>
      <option value="tidak">Tidak keduanya</option>
    </select>
  `;
    }
  });

  document
    .getElementById("hamilOrMenyusui")
    .addEventListener("change", function () {
      var hamilMenyusui = document.getElementById("hamilMenyusui").value;
      var umurHamilOrMenyusuiDiv = document.getElementById(
        "umurHamilOrMenyusui"
      );
      var submitButton = document.getElementById("submitButton");

      if (hamilMenyusui === "tidak") {
        umurHamilOrMenyusuiDiv.innerHTML = "";
        submitButton.classList.remove("hidden");
      } else {
        submitButton.classList.add("hidden");
        var umurText =
          hamilMenyusui === "hamil" ? "Umur Hamil" : "Umur Menyusui";
        document.getElementById("umurHamilOrMenyusui").innerHTML = `
    <label class="mt-3">${umurText}:</label>
    <input type="number" class="form-control mt-1" id="umur" name="umur" required min="0">
  `;
        document.getElementById("umur").addEventListener("input", function () {
          var umur = document.getElementById("umur");
          var submitButton = document.getElementById("submitButton");

          if (umur && umur.value.trim() !== "") {
            submitButton.classList.remove("hidden");
          }
        });
      }
    });
}

export default simpleScript;
