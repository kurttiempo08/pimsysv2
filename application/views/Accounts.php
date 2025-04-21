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
	 $client_barangay = $_GET['client_barangay'];
	 $account = $_GET['office'];
	 $formula = $_GET['formula'];
	 $preparedby = $_GET['preparedby'];
	 $desig1 = $_GET['desig1'];
	 $approvedby = $_GET['approvedby'];
	 $desig2 = $_GET['desig2'];
	 $as_of = $_GET['date_now'];
	 $today = date("F j, Y");
	 $center_name = $_GET['centername'];
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
	$total = 0;
	



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
	
			@page { sheet-size: Legal;}
			
			@page {
				margin-top: 1cm;
				margin-bottom: 2cm;
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
							<td style="width:100%;text-align:left;"><img style="width:30%;" src="<?php echo base_url();?>assets/images/dswd_logo.png"></td>
						</tr>
					</table>
				<br>
				<h3 style="text-align:center;">DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT REGION - 10</h3>
				
				<h3 style="text-align:center;">SUMMARY OF ITEMS PER INVENTORY ACCOUNT</h3>
				<?php if($center_name):?>
					<h3 style="text-align:center;"><?php echo $center_name;?></h3>
				<?php endif;?>
				<h3 style="text-align:center;">AS OF: <?php echo $today;?></h3>
				<br><br><br>
				<h3 style="text-align:left;"><b><?php echo $account;?><br></b></h3>
				<br><br>
			
				
				
				<br><br>
				<?php if($formula == "noneweighted"):?>
						<table width="100%">
						<thead>
							<tr>
								<th style="font-weight:bold;border:1px solid;width:20%;">PROPERTY NUMBER</th>
								<th style="font-weight:bold;border:1px solid;width:13%;">SUB-ACCOUNT</th>
								<th style="font-weight:bold;border:1px solid;width:11%;">ITEM DESCRIPTION</th>
								<th style="font-weight:bold;border:1px solid;width:13%;">UNIT</th>
								<th style="font-weight:bold;border:1px solid;width:13%;">REMAINING QTY</th>
								<!-- <th style="font-weight:bold;border:1px solid;width:13%;">WEIGHTED AVERAGE</th> -->
								<th style="font-weight:bold;border:1px solid;width:17%;">TOTAL COST</th>
								<th style="font-weight:bold;border:1px solid;width:13%;">REMARKS</th>
								
							</tr>
						</thead>
							
						<tbody>
						<?php if($records):?>
							<?php foreach($records as $record):?>
							<?php
								$total = $total + $record->totalcost;
								//$weighted = $record->totalcost / $record->totalcost;
								if($record->total <= 0){
									$record->unitcost_bal = 0;
								}
							?>
							
							<tr>
								<td style="border:1px solid;font-size:10px"><?php echo $record->stock_no . " - " . $record->item_code;?></td>
								<td style="border:1px solid;font-size:10px"><?php echo $record->item_name;?></td>
								<td style="border:1px solid;font-size:10px"><?php echo $record->brand. "-" .$record->item_description;?></td>
								<td style="border:1px solid;font-size:10px;text-align:center;"><?php echo $record->unit_name;?></td>
								<td style="border:1px solid;font-size:10px;text-align:center;"><?php echo $record->total;?></td>
								<!--<td style="border:1px solid;font-size:10px;text-align:right;"><?php //echo number_format($record->unitcost_bal, 2,'.',',');?></td> -->
								<td style="border:1px solid;font-size:10px;text-align:right;"><?php echo number_format($record->totalcost, 2,'.',',');?></td>
								<td style="border:1px solid;font-size:10px;text-align:right;"></td>
							</tr>
							<?php endforeach;?>
						<?php endif;?>
							<tr>
								<th colspan="4" style="font-weight:bold;width:85%;"></th>
								<th style="font-weight:bold;width:15px;text-align:right;">TOTAL: <?php echo number_format($total, 2,'.',',');?></th>
							</tr>
						</tbody>
						</table>
				<?php else: ?>
					<table width="100%">
					<thead>
						<tr>
							<th style="font-weight:bold;border:1px solid;width:20%;">PROPERTY NUMBER</th>
							<th style="font-weight:bold;border:1px solid;width:10%;">SUB-ACCOUNT</th>
							<th style="font-weight:bold;border:1px solid;width:11%;">ITEM DESCRIPTION</th>
							<th style="font-weight:bold;border:1px solid;width:11%;">UNIT</th>
							<th style="font-weight:bold;border:1px solid;width:10%;">REMAINING QTY</th>
							<th style="font-weight:bold;border:1px solid;width:10%;">WEIGHTED AVERAGE</th>
							<th style="font-weight:bold;border:1px solid;width:16%;">TOTAL COST</th>
							<th style="font-weight:bold;border:1px solid;width:10%;">REMARKS</th>
						</tr>
					</thead>
						
					<tbody>
					<?php if($records):?>
						<?php foreach($records as $record):?>
						<?php
							$total = $total + $record->totalcost;
							//$weighted = $record->totalcost / $record->totalcost;
							if($record->total <= 0){
								$record->unitcost_bal = 0;
							}
						?>
						
						<tr>
							<td style="border:1px solid;font-size:10px"><?php echo $record->stock_no . " - " . $record->item_code;?></td>
							<td style="border:1px solid;font-size:10px"><?php echo $record->item_name;?></td>
							<td style="border:1px solid;font-size:10px"><?php echo $record->brand. "-" .$record->item_description;?></td>
							<td style="border:1px solid;font-size:10px;text-align:center;"><?php echo $record->unit_name;?></td>
							<td style="border:1px solid;font-size:10px;text-align:center;"><?php echo $record->total;?></td>
							<td style="border:1px solid;font-size:10px;text-align:right;"><?php echo number_format((floor($record->unitcost_bal * 100) / 100), 2,'.',',');?></td>
							<td style="border:1px solid;font-size:10px;text-align:right;"><?php echo number_format($record->totalcost, 2,'.',',');?></td>
							<td style="border:1px solid;font-size:10px;text-align:right;"></td>
						</tr>
						<?php endforeach;?>
						<tr>
							<th colspan="4" style="font-weight:bold;width:85%;"></th>
							<th style="font-weight:bold;width:15px;text-align:right;">TOTAL: <?php echo number_format($total, 2,'.',',');?></th>
						</tr>
					<?php endif;?>
					</tbody>
					</table>
				<?php endif; ?>
				<br><br><br><br><br>
				<table width="100%">
					<tr>
						<th style="font-weight:bold;width:10%;">Prepared by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;"><?php echo $preparedby; ?></th>
						<th style="font-weight:bold;width:10%;">Certified by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;"><?php echo $approvedby; ?></th>
					</tr>
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig1; ?></td>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig2; ?></td>
					</tr>
				</table>
				<table width="100%">
					
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
				
				<h6 style="text-align:center;">Page {PAGENO} of {nbpg}</h6>
				<h6 style="text-align:left;">Generated by PIMS v1.1 (<?php echo date("m/d/Y");?>)</h6>
					
				<br><br><br><br>
				</div>
			</htmlpagefooter>
		</body>
	</html>