	<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	$member_count = 0;
	$thirty = 0;
	$sixty = 0;
	$ninety = 0;
	$onetweny = 0;
	$above = 0;
	$recepient_name = $_GET['recepient_name'];
	$recp_contact = $_GET['recp_contact'];
	$recp_address = $_GET['recp_address'];
	$request_type = $_GET['request_type'];
	$request_date = $_GET['request_date'];
	$rabies_nodogcat = $_GET['rabies_nodogcat'];
	$ai_species = $_GET['ai_species'];
	$ai_datetimeofheat = $_GET['ai_datetimeofheat'];
	$ad_reason = $_GET['ad_reason'];
	$scom_test = $_GET['scom_test'];
	$scom_species = $_GET['scom_species'];
	$scom_noofheads = $_GET['scom_noofheads'];
	$tc_species = $_GET['tc_species'];
	$tc_noofheads = $_GET['tc_noofheads'];
	$tc_symptoms = $_GET['tc_symptoms'];
	$euth_species = $_GET['euth_species'];
	$euth_noofheads = $_GET['euth_noofheads'];
	$euth_reason = $_GET['euth_reason'];
	$sc_species = $_GET['sc_species'];
	$sc_age = $_GET['sc_age'];
	$sc_sex = $_GET['sc_sex'];
	$sc_noofheads = $_GET['sc_noofheads'];
	$receivedby = $_GET['receivedby'];
	$technician = $_GET['technician'];
	$other_reason = $_GET['others'];



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
	
			@page { sheet-size: Letter; }
			
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
				font-size: 110%;
				text-align:center;
				padding: 10px;
			}
	
		</style>
		<body>
			<?php //if($records): ?>
			<div class="half_me">
					<table width="100%">
						<tr>
							<td style="width:100%;text-align:center;"><img src="<?php echo base_url();?>assets/images/header.png"></td>
						</tr>
					</table>
				<br>
				<h3 style="text-align:center;"><b>CLIENT REQUEST FORM <br></b></h3>
				<br><br><br><br>
				<table width="100%">
					<tr>
						<td style="font-weight:normal;width:40%;"><b>Client Name:</b> <?php echo  $recepient_name;?></td>
						<td style="width:20%;font-weight:normal;text-align:left;"></td>
						<td style="font-weight:normal;width:40%;"><b>Date:</b>  <?php echo $request_date; ?></td>
					</tr><br>
					<tr>
						<td style="font-weight:normal;width:40%;"><b>Address:</b> <?php echo $recp_address;?></td>
						<td style="width:20%;"></td>
						<td style="font-weight:normal;width:40%;"><b>Contact:</b> <?php echo  $recp_contact;?></td>
					</tr>
				</table><br>
				<table width="100%">
						<tr>
							<td style="font-weight:bold;width:10%;"></td>
							<td style="font-weight:bold;width:10%;">Request: </td>
							<td style="width:80%;"><?php echo $request_type;?></td>
						</tr>
					</table><br>
				<?php if($request_type === "Rabies Vaccination"): ?>
					<table width="100%">
						<tr>
							<td style="font-weight:bold;width:10%;"></td>
							<td style="font-weight:bold;width:10%;"></td>
							<td style="width:80%;">No. of dogs/cats: <u><?php echo $rabies_nodogcat;?></u></td>
						</tr>
					</table><br>
				<?php elseif ($request_type === "Artificial Insemination"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:15%;">Species: <u><?php echo $ai_species;?></u></td>
						<td style="width:45%;">Date & Time of First Heat: <u><?php echo $ai_datetimeofheat;?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Animal Dispersal"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:60%;">Reason: <u><?php echo $ad_reason; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Sample Collection"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">Test: <u><?php echo $scom_test; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $scom_species; ?></u></td>
						<td style="width:20%;">No of heads: <u><?php echo $scom_noofheads; ?></u></td>
					</tr>
				</table><br><br><br>
				<?php elseif ($request_type === "Treatment/Check-up"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">No of heads: <u><?php echo $scom_test; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $scom_test; ?></u></td>
						<td style="width:20%;">Symptoms: <u><?php echo $scom_test; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Euthanasia"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">No of heads: <u><?php echo $euth_noofheads; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $euth_species; ?></u></td>
						<td style="width:20%;">Reason: <u><?php echo $euth_reason; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Spay & Castration"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">No of heads: <u><?php echo $sc_noofheads; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $sc_species; ?></u></td>
						<td style="width:10%;">Age: <u><?php echo $sc_age; ?></u></td>
						<td style="width:10%;">Sex: <u><?php echo $sc_sex; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Others"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:60%;">Reason: <u><?php echo $other_reason; ?></u></td>
					</tr>
				</table>
				<?php endif; ?>
				<br><br>

				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:8%;"></td>
						<td style="font-weight:bold;width:27%;border-bottom:1px solid;text-align:center;"><?php echo $technician; ?></td>
						<td style="font-weight:bold;width:35%;"></td>
						<td style="font-weight:bold;width:30%;border-bottom:1px solid;text-align:center;"><?php echo $receivedby; ?></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:8%;"></td>
						<td style="font-weight:bold;width:42%;">Technician/Veterinarian </td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="font-weight:bold;width:20%;">Received by </td>
					</tr>
				</table><br><br><br>
					<h5 style="text-align:center;text-weight:normal;margin-bottom:1%;">2nd Flr, Boyscout Bldg, Hayes St, Brgy. 40</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:1%;">Cagayan de Oro City, Philippines</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:1%;"><u>cityveterinarycdo@gmail.com</u></h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:-1%;margin-bottom:1%;">857-2185/09971487356</h5>
			</div>
			<hr><br><br>
					<table width="100%">
						<tr>
							<td style="width:100%;text-align:center;"><img src="<?php echo base_url();?>assets/images/header.png"></td>
						</tr>
					</table>
				<br>	
			<h3 style="text-align:center;"><b>CLIENT REQUEST FORM <br></b></h3>
				<br><br><br><br>
				<table width="100%">
					<tr>
						<td style="font-weight:normal;width:40%;"><b>Client Name:</b> <?php echo  $recepient_name;?></td>
						<td style="width:20%;"></td>
						<td style="font-weight:normal;width:40%;"><b>Date:</b>  <?php echo $request_date; ?></td>
					</tr><br>
					<tr>
						<td style="font-weight:normal;width:40%;"><b>Address:</b> <?php echo $recp_address;?></td>
						<td style="width:20%;"></td>
						<td style="font-weight:normal;width:40%;"><b>Contact:</b> <?php echo  $recp_contact;?></td>
					</tr>
				</table><br>
				<table width="100%">
						<tr>
							<td style="font-weight:bold;width:10%;"></td>
							<td style="font-weight:bold;width:10%;">Request: </td>
							<td style="width:80%;"><?php echo $request_type;?></td>
						</tr>
					</table><br>
				<?php if($request_type === "Rabies Vaccination"): ?>
					<table width="100%">
						<tr>
							<td style="font-weight:bold;width:10%;"></td>
							<td style="font-weight:bold;width:10%;"></td>
							<td style="width:80%;">No. of dogs/cats: <u><?php echo $rabies_nodogcat;?></u></td>
						</tr>
					</table><br>
				<?php elseif ($request_type === "Artificial Insemination"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:15%;">Species: <u><?php echo $ai_species;?></u></td>
						<td style="width:45%;">Date & Time of First Heat: <u><?php echo $ai_datetimeofheat;?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Animal Dispersal"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:60%;">Reason: <u><?php echo $ad_reason; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Sample Collection"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">Test: <u><?php echo $scom_test; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $scom_species; ?></u></td>
						<td style="width:20%;">No of heads: <u><?php echo $scom_noofheads; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Treatment/Check-up"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">No of heads: <u><?php echo $scom_test; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $scom_test; ?></u></td>
						<td style="width:20%;">Symptoms: <u><?php echo $scom_test; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Euthanasia"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">No of heads: <u><?php echo $euth_noofheads; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $euth_species; ?></u></td>
						<td style="width:20%;">Reason: <u><?php echo $euth_reason; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Spay and Castration"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:20%;">No of heads: <u><?php echo $sc_noofheads; ?></u></td>
						<td style="width:20%;">Species: <u><?php echo $sc_species; ?></u></td>
						<td style="width:10%;">Age: <u><?php echo $sc_age; ?></u></td>
						<td style="width:10%;">Sex: <u><?php echo $sc_sex; ?></u></td>
					</tr>
				</table><br>
				<?php elseif ($request_type === "Others"): ?>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="width:60%;">Reason: <u><?php echo $other_reason; ?></u></td>
					</tr>
				</table>
				<?php endif; ?>
				<br><br>

				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:8%;"></td>
						<td style="font-weight:bold;width:27%;border-bottom:1px solid;text-align:center;"><?php echo $technician; ?></td>
						<td style="font-weight:bold;width:35%;"></td>
						<td style="font-weight:bold;width:30%;border-bottom:1px solid;text-align:center;"><?php echo $receivedby; ?></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="font-weight:bold;width:8%;"></td>
						<td style="font-weight:bold;width:42%;">Technician/Veterinarian </td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="font-weight:bold;width:20%;">Received by </td>
					</tr>
				</table><br><br><br>
					<h5 style="text-align:center;text-weight:normal;margin-bottom:1%;">2nd Flr, Boyscout Bldg, Hayes St, Brgy. 40</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:1%;">Cagayan de Oro City, Philippines</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:1%;"><u>cityveterinarycdo@gmail.com</u></h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:-1%;margin-bottom:1%;">857-2185/09971487356</h5>
			</div>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
					
				<br>
				</div>
			</htmlpagefooter>
		</body>
	</html>