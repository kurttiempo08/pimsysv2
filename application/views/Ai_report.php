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
	//  $aimonitoring_id = $_GET['aimonitoring_id'];
	//  $recepient_name = $_GET['recepient_name'];
	 $datefrom = $_GET['datefrom'];
	 $date_to = $_GET['dateto'];
	// $recp_contact = $_GET['recp_contact'];
	// $recp_address = $_GET['recp_address'];
	// $animal_type = $_GET['animal_type'];
	// $insemination_date = $_GET['insemination_date'];
	// $monitoring_date = $_GET['monitoring_date'];
	// $diagnosis_date = $_GET['diagnosis_date'];
	// $parturitionfrom_date = $_GET['parturitionfrom_date'];
	// $parturitionto_date = $_GET['parturitionto_date'];
	// $status = $_GET['status'];
	// $remarks = $_GET['remarks'];
	// $technician = $_GET['technician'];
	// $semensource = $_GET['semensource'];
	// $animal_code = $_GET['animal_code'];
	// $actual_date = $_GET['actual_date'];
	// $pregnancy = $_GET['pregnancy'];
	// $receivedby = $_GET['receivedby'];
	// $technician = $_GET['technician'];
	// $other_reason = $_GET['others'];
	// $pregnancy = $_GET['pregnancy'];
	



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
				font-family: 'Tahoma';
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
				<br>
				<h3 style="text-align:center;"><b>Artificial Insemination FROM <u><?php echo $datefrom;?></u> TO <u><?php echo $date_to;?></u> <br></b></h3>
				<br><br><br><br>
			
				
				
				<br><br>

				<table width="100%">
				<thead>
					<tr>
						<th style="font-weight:bold;border:1px solid;width:20%;">CLIENT NAME</th>
						<th style="font-weight:bold;border:1px solid;width:20%;">ADDRESS</th>
						<th style="font-weight:bold;border:1px solid;width:13%;">MONITORING DATE</th>
						<th style="font-weight:bold;border:1px solid;width:11%;">SEMEN SOURCE</th>
						<th style="font-weight:bold;border:1px solid;width:13%;">DIAGNOSIS DATE</th>
						<th style="font-weight:bold;border:1px solid;width:17%;">PATURATION RANGE</th>
						<th style="font-weight:bold;border:1px solid;width:6%;">ANIMAL TYPE</th>
						
					</tr>
				</thead>
					
				<tbody>
				<?php if($records):?>
					<?php foreach($records as $record):?>
					<tr>
						<td style="border:1px solid;font-size:10px"><?php echo $record->recepient_name;?></td>
						<td style="border:1px solid;font-size:10px"><?php echo $record->recp_address;?></td>
						<td style="border:1px solid;font-size:10px"><?php echo $record->monitoring_date;?></td>
						<td style="border:1px solid;font-size:10px"><?php echo $record->semensource;?></td>
						<td style="border:1px solid;font-size:10px"><?php echo $record->diagnosis_date;?></td>
						<td style="border:1px solid;font-size:10px"><?php echo $record->parturitionfrom_date;?> <b>-</b> <?php echo $record->parturitionto_date;?></td>
						<td style="border:1px solid;font-size:10px"><?php echo $record->animal_type;?></td>
					</tr>
					<?php endforeach;?>
				<?php endif;?>
				</tbody>
				</table>
				<!-- <table width="100%">
					<tr>
						<td style="font-weight:bold;width:8%;"></td>
						<td style="font-weight:bold;width:42%;">Technician/Veterinarian </td>
						<td style="font-weight:bold;width:30%;"></td>
						<td style="font-weight:bold;width:20%;">Received by </td>
					</tr>
				</table> -->
			</div>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
			<hr>
					<h5 style="text-align:center;text-weight:normal;margin-bottom:0%;">2nd Flr, Boyscout Bldg, Hayes St, Brgy. 40</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;">Cagayan de Oro City, Philippines</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;"><u>cityveterinarycdo@gmail.com</u></h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;">857-2185/09971487356</h5>
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
					
				<br><br><br><br>
				</div>
			</htmlpagefooter>
		</body>
	</html>