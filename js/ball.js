function ready(fn)
{
	if (document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded', fn, false);
	}
	else
	{
		document.attachEvent('onreadystatechange', function (){
			if (document.readyState == 'complete')
			{
				fn();
			}
		});
	}
}

function rnd(n,m)
{
	return Math.floor(Math.random()*(m-n));	
}

ready(function(){
	
	(function(){
		var timer=null;
		var oTable=document.getElementById('table_box');
		var n=0;
		timer=setInterval(function(){
			n=rnd(1,30);
			var oDiv=document.createElement('div');
			oDiv.style.width=n+'px';
			oDiv.style.height=n+'px';
			oDiv.style.background='rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
			oTable.appendChild(oDiv);
			
			setTimeout(function(){
				oDiv.parentNode.removeChild(oDiv);	
			},1000);			
			move(oDiv, {left:rnd(0,1000), top:rnd(0,1000)});	
				
		},300);
		
	})();
		
});

