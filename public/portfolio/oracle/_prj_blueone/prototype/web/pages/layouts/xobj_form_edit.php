<?	//<popup>700,750</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Oject Form","action_dialogs.js","class|obj_form");
?>
<div id="header" class="header">
	<?
	$ui->addHeader("layout_generic");
	$ui->addObjectActions();
	$ui->addTabs();
	$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat. Up to three lines of instructional text are possible&hellip; <a href=\"#\" class=\"more\" onClick=\"getMessage('../dialogs/test2.php');\">More</a>");
	?>
	<!--************************************
		PAGE CONTROLS
	*************************************-->
	<div class="page_controls">
		<p class="button_controls"><a href="obj_form.php" class="button">Save</a> <a href="obj_form.php" class="button">Cancel</a></p>
	</div>
</div>
<div id="content" class="content">
    <div class="container">
		<form id="form_dialogs" name="frm1" action="">
			<h3>Page 1</h3>
			<dl class="side_by_side_text">
				<dt>Auto Number:</dt>
					<dd>Text</dd>
				<dt>Type Menu:</dt>
					<dd>Text</dd>
				<dt>Text:</dt>
					<dd>Value</dd>
				<dt>Single-Select User:</dt>
					<dd><a href="#">User Link</a></dd>
				<dt class="input_row">Text Input:</dt>
					<dd><input id="first_field" type="text" value="text" class="long_short" /></dd>
				<dt class="input_row">Textarea:</dt>
					<dd><textarea class="long_width medium_textbox">This is example text in a multi-line text field.  The content of this field may take up more space than the input.  In that case, the input would have a vertical scrollbar.</textarea></dd>
				<dt>Text Link:</dt>
					<dd>&nbsp;</dd>
				<dt>Text Link 2:</dt>
					<dd>&nbsp;</dd>
				<dt class="input_row">Menu Text:</dt>
					<dd>
						<select class="long_width">
							<option>Text</option>
						</select>
					</dd>
			</dl>
			<h3>Page 2</h3>
			<dl class="side_by_side">
				<dt >Menu:</dt>
					<dd class="button_padding">
						<input type="text" value="" />
						<a href="#" class="button icon view_details">&nbsp;</a>
					</dd>
			</dl>
		</form>
	</div>
</div>
<? $ui->printPage() ?>