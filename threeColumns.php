<?php include('header.php'); ?>  
  <div id="wrap" role="main">
<!--one column -->		
		<div class="oneCol clearfix">
<!-- three column -->
		<div class="threeCol">
			<div class="content">
							<p>Column</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue leo quis enim  </p>	
			</div>
		</div>
		<div class="threeCol">
			<div class="content">
							<script charset="utf-8" src="http://widgets.twimg.com/j/2/widget.js"></script>
<script>
new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 4,
  interval: 30000,
  width: 'auto',
  height: 300,
  theme: {
    shell: {
      background: '#eeeeee',
      color: '#222222'
    },
    tweets: {
      background: '#eeeeee',
      color: '#222222',
      links: ''
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: true,
    behavior: 'all'
  }
}).render().setUser('FuelComms').start();
</script>	
			</div>
		</div>
		<div class="threeCol">
			<div class="content">
							<p>Column</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue leo quis enim  </p>	
			</div>
		</div>
<!-- end three column -->
		</div>
<!-- end one column -->

<!--one column -->		
		<div class="oneCol clearfix">
<!-- three column nested with two (6 column) -->
		<div class="threeCol">
			<!-- two column -->
					<div class="twoCol">
						<div class="content">
							<p>Two</p>		
						</div>
						
					</div>
					<div class="twoCol">
			
						<div class="content">
							<p>Column</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue leo quis enim  </p>	
						</div>			
					</div>
			<!-- end two column -->		
		</div>
		<div class="threeCol">
			<!-- two column -->
					<div class="twoCol">
						<div class="content">
							<p>Two</p>		
						</div>
						
					</div>
					<div class="twoCol">
			
						<div class="content">
							<p>Column</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue leo quis enim  </p>	
						</div>			
					</div>
			<!-- end two column -->		
		</div>
		<div class="threeCol">
			<!-- two column -->
					<div class="twoCol">
						<div class="content">
							<p>Two</p>		
						</div>
						
					</div>
					<div class="twoCol">
			
						<div class="content">
							<p>Column</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue leo quis enim  </p>	
						</div>			
					</div>
			<!-- end two column -->		
		</div>
<!-- end three column nested -->
		</div>
<!-- end one column -->
  </div>
<?php include('footer.php'); ?>