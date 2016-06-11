<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Send Email</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

</head>
<body> 
<h2>Send Email</h2>
<p>Form specific styles reside in pop_up.css.</p>
<div class="prompt_mask"></div>
<div class="pop_up with_form_content">
    <div class="content">
	   <h4>Send Email</h4>
	   <fieldset class="dynamic">
			<dl class="side_by_side_mixed">
				<!-- Character Counter w/ Autoexpand Multi-text -->
				<dt><label for="multitext_counter">Comments:</label></dt>
				<dd>
					<textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
					<input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_originator" type="checkbox" name="" class="form_selectors" /> <label for="ui_originator">All Team Members</label>
				</dd>
			</dl>
		</fieldset>
		<p class="actions">
			<a href="#" id="cmdOk" class="button"><span>Send</span></a>
			<a href="#" id="cmdCancel" class="button"><span>Cancel</span></a>
		</p>
    </div>
</div>
</body>
</html>