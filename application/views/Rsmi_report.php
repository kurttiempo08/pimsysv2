	<?php
	header('Content-type: application/excel');
	$filename = 'RSMI-'. date('mdY') .'.xls';
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
	 $today = date("F j, Y");
	 $ris = $_GET['ris'];
	 $responsibility_center = $_GET['responsibility_center'];
	 $center_fname = $_GET['center_fname'];
	 $purpose = $_GET['purpose'];
	 $requestedby = $_GET['requestedby'];
	 $desig1 = $_GET['desig1'];
	 $approvedby = $_GET['approvedby'];
	 $desig2 = $_GET['desig2'];
	 $grandtotal = 0;
	 $recap_total = 0;
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
						<td style="width:25;text-align:left;"><img style="width:25%;" src="<?php echo base_url();?>assets/images/dswd_logo.png"></td>
						<td style="width:50%;text-align:center;"><h4>ADMINISTRATIVE SERVICES</h4><br><h6>GENERAL ADMINISTRATION AND SUPPORT SERVICES GROUP</h6><br><h6>DSWD-AS-GF-024 | REV 00  / 11 JAN 2021</h6></td>
						<td style="width:25%;text-align:left;"></td>
					</tr>
				</table>
				<br>
				<h3 style="text-align:center;">REPORT OF SUPPLIES AND MATERIALS ISSUED<br><br><?php echo $center_fname;?></h3><br>
				<table width="100%">
					<tr>
						<td style="width:25%;text-align:left;">DATE: <?php echo date("m/d/Y");?> </td>
						<td style="width:50%;text-align:left;"></td>
						<td style="width:25%;text-align:center;">NO: <?php echo date("Y - m  -0011");?></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="width:30%;text-align:left;border-top:1px solid;border-left:1px solid;border-bottom:1px solid;font-size:10px;">
							<i>To be filled up by In-Charge of Stockroom</i>
						</td>
						<td style="width:45%;text-align:left;border-top:1px solid;border-bottom:1px solid"></td>
						<td style="width:25%;text-align:center;border-top:1px solid;border-right:1px solid;border-bottom:1px solid;font-size:10px;"><i>To be filled up by Acctg. Staff<i></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;">PR NO./RIS No.</td>
						<td style="width:12%;text-align:center;border:1px solid;">Responsibility Center</td>
						<td style="width:12%;text-align:center;border:1px solid;">Stock No.</td>
						<td style="width:15%;text-align:center;border:1px solid;">Item</td>
						<td style="width:12%;text-align:center;border:1px solid;">Unit</td>
						<td style="width:12%;text-align:center;border:1px solid;">Quantity issued</td>
						<td style="width:12%;text-align:center;border:1px solid;">Unit Cost</td>
						<td style="width:12%;text-align:center;border:1px solid;">Amount</td>
					</tr>
					<?php foreach($records as $record):?>
					<?php 
						$grandtotal = $grandtotal + ($record->unitcost_issue * $record->qty_issue);
					?>
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;"><?php echo $record->ris;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $record->responsibility;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $record->item_code;?></td>
						<td style="width:15%;text-align:center;border:1px solid;"><?php echo $record->item_name . " - " . $record->item_description;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $record->unit_name;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $record->qty_issue;?></td>
						<td style="width:12%;text-align:right;border:1px solid;"><?php echo number_format($record->unitcost_issue,2);?></td>
						<td style="width:12%;text-align:right;border:1px solid;"><?php echo number_format(($record->unitcost_issue * $record->qty_issue),2);?></td>
					</tr>
					<?php endforeach; ?>
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:15%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:left;border:1px solid;">TOTAL</td>
						<td style="width:12%;text-align:right;border:1px solid;"><b><?php echo number_format($grandtotal,2);?></b></td>
					</tr>
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;font-size:10px;">Recapitulation</td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:15%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;font-size:10px;">Recapitulation</td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:left;border:1px solid;"></td>
						<td style="width:12%;text-align:right;border:1px solid;"></td>
					</tr>
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;">Stock No.</td>
						<td style="width:12%;text-align:center;border:1px solid;">Quantity</td>
						<td style="width:15%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;">Unit Cost</td>
						<td style="width:12%;text-align:center;border:1px solid;">Total Cost</td>
						<td style="width:12%;text-align:center;border:1px solid;">Account Code</td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
					</tr>
					<?php
						foreach($recaps as $recap):
					?>
					<?php $recap_total = $recap_total + ($recap->unitcost_issue * $recap->total_qty);?>
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;"><?php echo $recap->item_name . " - " .$recap->item_description;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $recap->item_code;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $recap->total_qty;?></td>
						<td style="width:15%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:right;border:1px solid;"><?php echo number_format($recap->unitcost_issue,2);?></td>
						<td style="width:12%;text-align:right;border:1px solid;"><?php echo number_format(($recap->unitcost_issue * $recap->total_qty),2);?></td>
						<td style="width:12%;text-align:center;border:1px solid;"><?php echo $recap->office_UACS;?></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
					</tr>
					<?php	
						endforeach;
					?>
					<tr>
						<td style="width:13%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:15%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:right;border:1px solid;font-weight:bold">TOTAL</td>
						<td style="width:12%;text-align:right;border:1px solid;font-weight:bold"><?php echo number_format($recap_total,2);?></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
						<td style="width:12%;text-align:center;border:1px solid;"></td>
					</tr>
				</table><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
				<table width="100%">
					<tr>
						<td style="width:10%;text-align:center;"></td>
						<td style="width:35%;text-align:center;border-bottom:2px solid;"><b>JOSEPH MANUEL B. AGUJA</b></td>
						<td style="width:10%;text-align:center;"></td>
						<td style="width:35%;text-align:center;border-bottom:2px solid;"></td>
						<td style="width:10%;text-align:center;"></td>
					</tr>
					<tr>
						<td style="width:5%;text-align:center;"></td>
						<td style="width:40%;text-align:center;font-size:12px;font-weight:bold;">Chief, Property Supply and Asset Management Division</td>
						<td style="width:10%;text-align:center;"></td>
						<td style="width:40%;text-align:center;font-size:12px;font-weight:bold;">Accounting Clerk</td>
						<td style="width:5%;text-align:center;"></td>
					</tr>
				</table>
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