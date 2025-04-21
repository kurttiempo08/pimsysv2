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
	 $today = date("F j, Y");
	 $ris = $_GET['ris'];
	 $responsibility_center = $_GET['responsibility_center'];
	 $center_fname = $_GET['center_fname'];
	 $purpose = $_GET['purpose'];
	 $requestedby = $_GET['requestedby'];
	 $desig1 = $_GET['desig1'];
	 $approvedby = $_GET['approvedby'];
	 $desig2 = $_GET['desig2'];
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
							<td style="width:20%;text-align:left;"><img style="width:30%;" src="<?php echo base_url();?>assets/images/dswd_logo.png"></td>
							<td style="width:20%;text-align:right;"><i>Appendix 63</i></td>
						</tr>
					</table>
				<br>
				<h3 style="text-align:center;">REQUISITION AND ISSUE SLIP</h3><br>
				<table width="100%">
					<tr>
						<td style="width:55%;text-align:left;"><h6>Entity Name: Department of Social Welfare and Development FO - X</h6></td>
						<td style="width:45%;text-align:left;"><h6>Fund Cluster: ________________________________________________<h6></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-top: 1px solid;border-right: 1px solid"><h6>Division: </h6></td>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-top: 1px solid;border-right: 1px solid"><h6>Responsibility Center Code: <?php echo $responsibility_center;?><h6></td>
					</tr>
					<tr>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-bottom: 1px solid;border-right: 1px solid"><h6>Office: <?php echo $center_fname;?></h6></td>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-bottom: 1px solid;border-right: 1px solid"><h6>RIS No: <?php echo $ris;?><h6></td>
					</tr>
				</table>

				<table width="100%">
					<tr>
						<th style="text-align:center;border: 1px solid;" colspan="4"><h6><i>Requisition</i></h6></td>
						<th style="text-align:center;border: 1px solid;" colspan="2"><h6><i>Stock Available?</i><h6></td>
						<th style="text-align:center;border: 1px solid;" colspan="2"><h6><i>Issue</i><h6></td>
					</tr>
					<tr>
						<td style="border: 1px solid;text-align:center;"><h6>Stock No</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>Unit</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>Description</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>Quantity</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>Yes</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>No</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>Quantity</h6></td>
						<td style="border: 1px solid;text-align:center;"><h6>Remarks</h6></td>
					</tr>
					<?php foreach($records as $record):?>
						<tr>
							<td style="border: 1px solid;"></td>
							<td style="border: 1px solid;font-size:11px;"><?php echo $record->unit;?></td>
							<td style="border: 1px solid;font-size:11px;"><?php echo $record->item_name." - ".$record->description;?></td>
							<td style="border: 1px solid;text-align:right;font-size:11px;"><?php echo $record->qty;?></td>
							<td style="border: 1px solid;"></td>
							<td style="border: 1px solid;"></td>
							<td style="border: 1px solid;"></td>
							<td style="border: 1px solid;"></td>
						</tr>
					<?php endforeach;?>
				</table>
				<table width="100%">
					<tr>
						<td style="width:20%;text-align:left;border:1px solid;">Purpose: <?php echo $purpose;?></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="text-align:left;border:1px solid;width:16%;padding-bottom:35px">Signature</td>
						<td style="text-align:left;border:1px solid;width:21%;padding-bottom:35px">Requested by:</td>
						<td style="text-align:left;border:1px solid;width:21%;padding-bottom:35px">Approved by:</td>
						<td style="text-align:left;border:1px solid;width:21%;padding-bottom:35px">Issued by:</td>
						<td style="text-align:left;border:1px solid;width:21%;padding-bottom:35px">Received by: </td>
					</tr>
					<tr>
						<td style="text-align:left;border:1px solid;width:16%;">Printed Name</td>
						<td style="text-align:left;border:1px solid;width:21%;font-size:9px;"><?php echo $requestedby;?></td>
						<td style="text-align:left;border:1px solid;width:21%;font-size:9px;"><?php echo $approvedby;?></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
					</tr>
					<tr>
						<td style="text-align:left;border:1px solid;width:16%;">Designation</td>
						<td style="text-align:left;border:1px solid;width:21%;font-size:9px;"><?php echo $desig1;?></td>
						<td style="text-align:left;border:1px solid;width:21%;font-size:9px;"><?php echo $desig2;?></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
					</tr>
					<tr>
						<td style="text-align:left;border:1px solid;width:16%;">Date</td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
						<td style="text-align:left;border:1px solid;width:21%;"></td>
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