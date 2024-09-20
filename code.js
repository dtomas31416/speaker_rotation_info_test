<div id="cycle-container">
  <p id="item1" class="cycle-item">Item 1</p>
  <p id="item2" class="cycle-item" style="display:none;">Item 2</p>
  <p id="item3" class="cycle-item" style="display:none;">Item 3</p>
</div>
<button onclick="cycleItems()">Next</button>

<script>
  var currentItem = 0;
  var items = document.getElementsByClassName('cycle-item');

  function cycleItems() {
    items[currentItem].style.display = 'none';
    currentItem = (currentItem + 1) % items.length;
    items[currentItem].style.display = 'block';
  }
</script>
