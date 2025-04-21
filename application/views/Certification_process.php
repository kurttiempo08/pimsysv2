	<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	// $member_count = 0;
	// $thirty = 0;
	// $sixty = 0;
	// $ninety = 0;
	// $onetweny = 0;
	// $above = 0;
	$client_name = $_GET['client_name'];
	$client_tradename = $_GET['client_tradename'];
	$certissuance_id = $_GET['certissuance_id'];
	$request_type = $_GET['request_type'];
	$client_address = $_GET['client_address'];
	$client_BPYear = $_GET['client_BPYear'];
	$client_dayissuance = $_GET['client_dayissuance'];
	$client_monthissuance = $_GET['client_monthissuance'];
	$client_yearissuance = $_GET['client_yearissuance'];
	$client_signatory = $_GET['client_signatory'];
	$client_designation = $_GET['client_designation'];
	$client_designation2 = $_GET['client_designation2'];
	



	?>
	<html xmlns:x="urn:schemas-microsoft-com:office:excel">
		<head>
		
			<!--[if gte mso 9]>
			<xml>
				<x:ExcelWorkbook>
					<x:ExcelWorksheets>
						<x:ExcelWorksheet>
							<x:Name>Sheet 1</x:Name>
							<x:WorksheetOptions>
								<x:Print>
									<x:ValidPrinterInfo/>
								</x:Print>
							</x:WorksheetOptions>
						</x:ExcelWorksheet>
					</x:ExcelWorksheets>
				</x:ExcelWorkbook>
			</xml>
			<![endif]-->
		</head>
		<style>
			body {
				font-family: 'Times New Roman';
			}

			table {
				border-spacing: -1px;
				border-width:thin;
			}

			td {
				font-size: 120%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Letter;}
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1cm;
				margin-left: 1cm;
				margin-right: 1cm;
				odd-footer-name: html_myFooter;
			}
			
			h1.bigsection {
					page-break-before: always;
					page: bigger;
			}

			.main_t td{
			}

			th {
				font-size: 80%;
				text-align:center;
				padding: 10px;
			}
	
		</style>
		<body>
		<?php //var_dump($records);?>
			<?php //if($records): ?>
			<div class="half_me">
					<table width="100%">
						<tr>
							<td style="width:100%;text-align:center;"><img src="<?php echo base_url();?>assets/images/header.png"></td>
						</tr>
					</table>
				<br><br><br><br><br><br><br><br><br>
				<h3 style="text-align:center;letter-spacing:4px;font-size:20px;font-style">CERTIFICATION<br></b></h3>
				<br><br><br><br>
				<p style="text-align:left;margin-left:40px;font-size:15px;">TO WHOM IT MAY CONCERN:<br></b></p>
				<br>
				<p style="text-align:justify;font-size:15px;line-height:20px;margin-left:40px;margin-right:40px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THIS IS TO CERTIFY that <b><u><?php echo $client_name;?></u></b> a process food retailer with 
				trade name <b><u><?php echo $client_tradename;?></u></b>, <?php echo $client_address?>
				has been advised to follow RA 9296 known as Meat Inspection Code of the Philippines, as amended by RA 10536. Raw materials
				of processed food should be slaughtered from accredited establishments. Processed meat/foods should be hygenically handled 
				following RA 7394 (Consumer Act) and RA 10611 (Food Safety Act).<p>
				<p style="text-align:justify;font-size:15px;line-height:20px;margin-left:40px;margin-right:40px;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is issued upon the request of the above-named person in connection with his/her
					desire to apply for a Business Permit for the Year <?php echo $client_BPYear;?>.
				</p>
				<p style="text-align:justify;font-size:15px;line-height:20px;margin-left:40px;margin-right:40px;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issued this <?php echo $client_dayissuance;?> day of <?php echo $client_monthissuance;?> <?php echo $client_yearissuance;?> at City Veterinary Office, Cagayan de Oro City.
				</p><br><br><br><br><br><br><br><br><br><br><br><br>
				<table>
					<tr>
						<th style="width:60%;"></th>
						<th style="width:35%;font-size:14px;text-align:left;"><u><?php echo $client_signatory;?></u>
						<p style="position:absolute;margin-top:-18%;"><?php echo $client_designation;?></p>
						<p style="position:absolute;margin-top:-18%;"><?//php echo $client_designation2;?></p></th>
						<img style="width:25%;height:20%;position:absolute;margin-top:-18%;" src="<?php echo base_url();?>assets/images/signature.png">
						<th style="width:5%;"></th>
					</tr>
				</table>
			</div>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
			<hr>
					<!-- <h5 style="text-align:center;text-weight:normal;margin-bottom:0%;">2nd Flr, Boyscout Bldg, Hayes St, Brgy. 40</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;">Cagayan de Oro City, Philippines</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;"><u>cityveterinarycdo@gmail.com</u></h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;">857-2185/09971487356</h5>
				<div style="text-align: center;font-weight:bold;font-size:90%;"> -->
					<!-- Page {PAGENO} of {nbpg} -->
					
				<br><br><br><br>
				</div>
			</htmlpagefooter>
		</body>
	</html>